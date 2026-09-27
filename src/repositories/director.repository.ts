import { CreateDirectorDTO, UpdateDirectorDTO } from "../dtos/director.dto";
import { DirectorModel } from "../models/director.model";
import { MovieModel } from "../models/movie.model";
import { Types } from "mongoose";

export class DirectorRepository {
    public findAll() {
        return DirectorModel.find().sort({ name: 1 });
    }

    public findById(id: string) {
        return DirectorModel.findById(id);
    }

    public create(data: CreateDirectorDTO) {
        return DirectorModel.create(data);
    }

    public update(id: string, data: UpdateDirectorDTO) {
        return DirectorModel.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    public delete(id: string) {
        return DirectorModel.findByIdAndDelete(id);
    }

    public findWithMovies(id: string) {
        return DirectorModel.aggregate([
            { $match: { _id: new Types.ObjectId(id) } },
            {
                $lookup: {
                    from: MovieModel.collection.name,
                    localField: "_id",
                    foreignField: "director",
                    as: "movies",
                },
            },
            {
                $project: {
                    _id: 0,
                    id: { $toString: "$_id" },
                    name: 1,
                    biography: 1,
                    nationality: 1,
                    movies: {
                        $map: {
                            input: "$movies",
                            as: "movie",
                            in: {
                                id: { $toString: "$$movie._id" },
                                title: "$$movie.title",
                                releaseYear: "$$movie.releaseYear",
                                genre: "$$movie.genre",
                            },
                        },
                    },
                },
            },
        ]);
    }
}