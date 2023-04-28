export interface User{
    id:number
    firstname:string;
    lastname:string;
    middlename:string;
    email:string
    technologies:Array<string>
    password:string;
    cources?:Array<Cources>
}
export interface Cources{
id:number,
title:string,
imgurl:string;
modules:number;
totalhours:number;
level:string;
subscribed:boolean;
mainCourceId:number
description:string;
}
export interface MainCource{
    id:number;
    logo:string;
    subcources:number;
    learning:number;
}