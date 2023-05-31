import { Controller, Get, Param, Render } from '@nestjs/common';
import { PageService } from './page.service';

@Controller('page')
export class PageController {
    constructor(private readonly service: PageService) { }

    @Get()
    @Render('page/list')
    async getAllPages(): Promise<any> {
        const result = await this.service.findAllPages();
        return {
            pages: result
        }
    }

    @Get(':id')
    @Render('page/item')
    async getOnePage(@Param('id') id: string): Promise<any> {
        const result = await this.service.findPageById(+id);
        return {
            page: result
        }
    }

}
