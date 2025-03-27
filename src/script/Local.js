import { toast } from "react-toastify";

const setItem = () => {
    const setvalue = localStorage.getItem('product-list')
    if (setvalue) {
        const setvalueParse = JSON.parse(setvalue)
        return setvalueParse;
    }
    else {
        return [];
    }
}
const getItem = (id) => {
    const runitem = setItem()
    if (runitem.includes(id)) {
        toast("alleady added")

    }
    else {
        runitem.push(id)
        const setlo = JSON.stringify(runitem)
        localStorage.setItem('product-list', setlo)
        toast("product are added in dashborad")
    }
}
export { getItem, setItem }