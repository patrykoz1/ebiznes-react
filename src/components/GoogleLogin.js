import React from 'react'

export default function GoogleSignIn() {

    const responseGoogle = () => {
        window.location.href = "https://uj-ebiznes-back.azurewebsites.net/provider/google";
    }

    return (
        <div>
            <button onClick={responseGoogle}
                    className="add-to-cart-button register-bttn ingsoc ggl-bttn"> Login With Google </button>
        </div>
    )
}
