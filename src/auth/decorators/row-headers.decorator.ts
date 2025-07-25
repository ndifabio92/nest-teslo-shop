/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const RawHeaders = createParamDecorator(
  (_data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.rawHeaders;
  },
);
