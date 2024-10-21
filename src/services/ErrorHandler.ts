import {FastifyReply} from "fastify";
import {status, ServiceError} from '@grpc/grpc-js';

const {NODE_ENV} = process.env;

const GRPC_CODE_TO_HTTP_MAPPING = {
    [status.OK]: 200,
    [status.CANCELLED]: 499,
    [status.UNKNOWN]: 500,
    [status.INVALID_ARGUMENT]: 422,
    [status.DEADLINE_EXCEEDED]: 504,
    [status.NOT_FOUND]: 404,
    [status.ALREADY_EXISTS]: 409,
    [status.PERMISSION_DENIED]: 403,
    [status.RESOURCE_EXHAUSTED]: 429,
    [status.FAILED_PRECONDITION]: 412,
    [status.ABORTED]: 409,
    [status.OUT_OF_RANGE]: 400,
    [status.UNIMPLEMENTED]: 501,
    [status.INTERNAL]: 500,
    [status.UNAVAILABLE]: 503,
    [status.DATA_LOSS]: 500,
    [status.UNAUTHENTICATED]: 401,
};

const STATUS_TO_MESSAGE_MAPPING = {
    200: 'OK',
    400: 'Bad Request',
    403: 'Forbidden',
    401: 'Unauthorized',
    404: 'Not Found',
    409: 'Conflict',
    412: 'Precondition Failed',
    422: 'Unprocessable entity',
    429: 'Too Many Requests',
    499: 'Canceled',
    501: 'Not Implemented',
    500: 'Internal Server Error',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
};

export default function Error(err: ServiceError, res: FastifyReply) {
    const errStatus = GRPC_CODE_TO_HTTP_MAPPING[err.code] || err.code

    const details = {
        message: err.details || err.message,
    }

    // @ts-ignore
    const errMessage = STATUS_TO_MESSAGE_MAPPING[details.status];

    res.status(errStatus).send({
        status: 'error',
        message: errMessage || details.message,
        errors: err.metadata,
        stack: NODE_ENV !== 'production' && errStatus >= 500 ? err.stack : undefined,
    });

}
