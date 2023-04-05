import { Controller, Get, Param } from '@nestjs/common';
import { PageService } from './page.service';

@Controller('page')
export class PageController {
    constructor(private readonly service: PageService) { }

    @Get()
    getAllPages(): any {
        return this.service.findAllPages();
    }

    @Get(':id')
    getOnePage(@Param('id') id: string): any {
        const result = this.service.findPageById(+id);
        return result;
    }

}
