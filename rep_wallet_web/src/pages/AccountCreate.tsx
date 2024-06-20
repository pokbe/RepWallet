import { Account } from "../models/Account"
import { useState } from "react"

export default function AccountCreate() {
    const [seedphrase, setSeedphrase] = useState("")
    const [account, setAccount] = useState<Account | null>(null)
    const [showRecoverInput, setShowRecoverInput] = useState(false);

    return (
        <div className="p-5 m-3 shadow card">
            <h1 className="mb-3">Rep Wallet</h1>
            <form>
                <button type="button" className="btn btn-primary">
                    Create Account
                </button>
                <button type="button" className="btn btn-outline-primary ml-3"
                    // if the recoveryinput is showing but there is no seedphrase, disable the ability to recover account
                    disabled={showRecoverInput && !seedphrase}
                >
                    Recover account
                </button>
                {showRecoverInput && (
                    <div className="form-group mt-3">
                        <input type="text" placeholder='Seedphrase or private key for recovery' className="form-control"
                            value={seedphrase} />
                    </div>
                )}
            </form>
        </div>
    )
};

