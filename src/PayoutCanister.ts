import { Canister, ic, nat64, Principal, update } from 'azle';
import TokenCanister from './TokenCanister';

const tokenCanister = TokenCanister(
    Principal.fromText('br5f7-7uaaa-aaaaa-qaaca-cai')
);

export default Canister({
    payout: update([Principal, nat64], nat64, async (to, amount) => {
        try {
            return await ic.call(tokenCanister.transfer, {
                args: [to, amount]
            });
        } catch (error) {
            console.log(error);
            throw new Error('Transaksi transfer gagal: ' + error.message);
        }

        return 0n;
    })
});
