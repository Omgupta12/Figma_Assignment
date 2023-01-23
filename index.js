const getData = async () => {
    try {
        let res = await fetch("https://mocki.io/v1/61a36370-212d-4ac7-baf6-355a14262cb7")
        let data = await res.json()
        console.log(data)
        TotalPortfolioValue(data.portfolio, data.loan_to_value)
        showdata(data.portfolio)
    }
    catch (error) {
        console.log(error)
    }
}
getData()


function TotalPortfolioValue(arr, data) {
    let loan = document.querySelector("#health")
    console.log(data)
    loan.innerText = data

    let sum = 0
    // console.log("arr", arr[0])
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].current_value
    }
    console.log("sum", sum)
    sum = Math.floor(sum)

    let total = document.getElementById("totalValue")
    total.innerText = `₹ ${sum}`
}

let scheme = document.querySelector(".e2")
let current = document.querySelector(".e7")
let folio = document.querySelector(".e8")
let units = document.querySelector(".e9")
let nav = document.querySelector(".e10")

function showdata(data) {
    data.map((el) => {
        return (
            current.innerText = Math.floor(el.current_value),
            scheme.innerText = el.scheme_name,
            folio.innerText = el.folio_number,
            units.innerText = el.units,
            nav.innerText = Math.floor(el.nav)
        )
    })


}




