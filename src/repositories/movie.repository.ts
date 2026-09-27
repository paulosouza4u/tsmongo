import { CreateMovieDTO, UpdateMovieDTO } from "../dtos/movie.dto";
import { DirectorModel } from "../models/director.model";
import { MovieModel } from "../models/movie.model";
import { Types } from "mongoose";

export class MovieRepository {
    public findAll() {
        return MovieModel.find().sort({ title: 1 });
    }

    public findById(id: string) {
        return MovieModel.findById(id);
    }

    public directorExists(id: string) {
        return DirectorModel.exists({ _id: id });
    }

    public create(data: CreateMovieDTO) {
        return MovieModel.create({ ...data, director: new Types.ObjectId(data.director) });
    }

    public update(id: string, data: UpdateMovieDTO) {
        const updateData = data.director
            ? { ...data, director: new Types.ObjectId(data.director) }
            : data;
        return MovieModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    }

    public delete(id: string) {
        return MovieModel.findByIdAndDelete(id);
    }
}