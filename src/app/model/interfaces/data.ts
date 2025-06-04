interface IData{
    [key: string]:string | number | ISubData | Array<ISubData>;
}

interface ISubData{
    [key: string]: string | number;
}