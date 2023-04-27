export interface Personal{
    imgurl:string;
    title:string;
    description:string;
}
export interface Topics{
    category:string
    topics:Array<string>    
}
export interface Course{
    imgsrc:string;
    title:string;
    subcribers:number;
    lavel:string;
    ratings:number;
}
export interface Videos{
    thumbnail:string;
    title:string;
    v_date:Date;
} 
export interface Article{
    categoryid:number
    name:string
    description:string
    tag:Array<string>
}
export interface Category{
    name:string
    id:number
}