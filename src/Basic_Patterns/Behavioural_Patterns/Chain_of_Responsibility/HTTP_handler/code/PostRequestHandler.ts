import {Handler} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/HTTP_handler/code/Handler";

class PostRequestHandler extends Handler {
    public handle(request: string): string {
        if (request === 'POST') {
            return `PostRequestHandler: Handling ${request} request.`;
        }

        return super.handle(request);
    }
}

export { PostRequestHandler };