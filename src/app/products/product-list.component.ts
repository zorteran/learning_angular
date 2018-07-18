import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFitler: string = '';

    _listFilter: string;
    errorMessage: any;

    get listFilter(): string {
        return this._listFilter
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = []


    constructor(private productService: ProductService) {
        this.listFilter = '';
    }

    toogleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log("I'm in onInit");
        this.productService.getProducts().subscribe(

            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        )
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;

    }

}