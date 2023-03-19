import { Injectable } from "@nestjs/common";


@Injectable()
export class PageService {

    private readonly pages = [
        {
            id: 1,
            title: "Home",
            content: "This is the home page"
        },
        {
            id: 2,
            title: "About",
            content: "This is the about page"
        },
        {
            id: 3,
            title: "Contact",
            content: "This is the contact page"
        }
    ];

    public getAllPages(): any {
        return this.pages;
    }

    public getPage(id: number): any {
        return this.pages.find((page) => {
            if(page.id === id) return page;
        });
    }

}