import { Controller, Get, Route, SuccessResponse } from "tsoa";

@Route("health")
export class HealthController extends Controller {
    @SuccessResponse("200", "OK")
    @Get()
    public async status(): Promise<{ status: string }> {
        return { status: "ok" };
    }
}
