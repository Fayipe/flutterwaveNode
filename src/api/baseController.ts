export class BaseController {
    public sendResponse(data, message = "OK", status = "success", statusCode = 200) {
        return { message, status, data, statusCode };
    }
}
