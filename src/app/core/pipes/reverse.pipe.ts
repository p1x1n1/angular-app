import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reverse',
    //standalone: true,//для возможности импортирования объявляем его как автономный
    pure: false // impure or pure mode
})
export class ReversePipe implements PipeTransform{
    transform(value: Array<any>, options: {isAddPointInEnd: boolean, isAddPointInBeg:boolean}, smile: boolean): any {
        console.log(options)
        if(options.isAddPointInBeg)
            value=value.map(item => "<3 "+ item)
        if(options.isAddPointInEnd)
            value=value.map(item => item + '!')
        if (smile)
            value=value.map(item => item + " ʕ ᵔᴥᵔ ʔ ")
        if (!value) {
            return ;
        }
        return value.reverse();
    }
}
    /**
     * interface PipeTransform {
        transform(value: any, ...args: any[]): any //Метод transform должен преобразовать входное значение. 
    }
     */
    /**
     * По умолчанию все pipes представляют тип "pure".
     *  Такие объекты отслеживают изменения в значениях примитивных типов (String, Number, Boolean, Symbol). 
     * В других объектах - типов Date, Array, Function, Object изменения отслеживаются, когда меняется ссылка, 
     * а не значение по ссылке. То есть, если в массив добавили элемент, массив поменялся, но ссылка переменной, которая представляет данный массив, не изменилась. Поэтому подобное изменение pure pipes не будут отслеживать.
     * Impure pipes отслеживают все изменения.
     * 
     */