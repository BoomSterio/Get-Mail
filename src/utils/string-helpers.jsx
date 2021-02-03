import {Badge} from 'antd'

export const stringHelpers = {
    formatString(str, length) {
        return str.length > length ? str.substr(0,length) + '...' : str
    },
    formatArrayOfStrings(arr, itemsToShow) {
        const string = arr.slice(0, itemsToShow).join(', ')
        return arr.length > itemsToShow ? <>{string}, ... <Badge style={{ backgroundColor: 'grey' }} count={`+${arr.length-itemsToShow}`}/></> : <>{string}</>
    }
}