import { Injectable } from "@nestjs/common";
import { PageInterface, PhotoInterface } from "./page.interface";

@Injectable()
export class PageService {

    private readonly pages: PageInterface[] = [
        {
            id: 1,
            title: "Home",
            content: "This is the home page",
            tags: ["home", "index"],
            photos: [
                {
                    path: "https://picsum.photos/200/300",
                    type: "image/jpeg",
                    size: 12345,
                    width: 200,
                    height: 300,
                    alt: "A random image",
                    title: "A random image"
                },
                {
                    path: "https://picsum.photos/200/300",
                    type: "image/jpeg",
                    size: 12345,
                    width: 200,
                    height: 300,
                    alt: "A random image",
                    title: "A random image"
                },
                {
                    path: "https://picsum.photos/200/300",
                    type: "image/jpeg",
                    size: 12345,
                    width: 200,
                    height: 300,
                    alt: "A random image",
                    title: "A random image"
                }
            ]
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
            if (page.id === id) return page;
        });
    }

}