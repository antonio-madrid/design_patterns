import {Handler} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/HTTP_handler/code/Handler";

class GetRequestHandler extends Handler {
    public handle(request: string): string {
        if (request === 'GET') {
            return `GetRequestHandler: Handling ${request} request.`;
        }

        return super.handle(request);
    }
}

export { GetRequestHandler };