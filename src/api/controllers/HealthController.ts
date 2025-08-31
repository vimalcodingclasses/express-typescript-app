import 'reflect-metadata';
import { Get, JsonController, Req, Res } from 'routing-controllers';

@JsonController('/health')
export class HelthController {
    @Get('/')
    async post(@Req() req: any, @Res() resp: any) {
        return resp.status(200).json({ status: 'OK' });
    }
}
