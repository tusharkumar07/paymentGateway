import axios from "axios";
const Payment=()=>{
    const productAmount=2;
    const productName="T-Shirt";
    const productSize=7;

    const handelOpenRazorPay=(data)=>{
        const opetions={
            key: "rzp_test_4Gku6qV6mYx3Qt", 
            amount: data.amount, 
            currency: data.currency,
            name: "Payment Gateway",
            description: "Test Transaction",
            order_id: data.id,
            handler: function (response){
                axios.post("https://localhost:5000/verify",{response:response}).then((res)=>{
                    console.log(res.data);
                }).catch((err)=>{
                    console.log(err);
                })
                console.log(response);
            },
        };
        var rzp = new window.Razorpay(opetions); 
        rzp.open();
    }
    const handlePayment=(amount)=>{
        const detail={amount:amount};
            axios.post("http://localhost:5000/orders",detail).then((res)=>{
                console.log(res.data);
                handelOpenRazorPay(res.data.data)
            }).catch((err)=>{
                console.log(err);
            })
    }
    return(
        <>
        {/* We can also get the data from api */}
            <div className="main" style={{border:"2px solid black",margin:"2em 2em",padding:"1em 2em",width:"15em"}}>
                <img src="https://picsum.photos/200" style={{height:'10em'}}/>
                <div className="info">
                <h4>Name:{productName}</h4>
                <h4>Size:${productSize}</h4>
                <h4>Amount:{productAmount}</h4>

                </div> 
                <button onClick={()=>{handlePayment(productAmount)}} className="btn btn-primary">Buy</button>
            </div>
        </>
    )
}
export default Payment;