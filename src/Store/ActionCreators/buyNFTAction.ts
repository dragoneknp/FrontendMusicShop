import axios from "axios";
import { WalletCardProps } from "../../types/types";
import { buyNFTSlice } from "../Slices/buyNFTSlice";
import { AppDispatch } from "../store";

export const buyNFT =
    (token: string, walletCard: WalletCardProps) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(buyNFTSlice.actions.buyNFTstart());
            const response: { data: WalletCardProps } = await axios.get(
                `https://nftshop-4237c-default-rtdb.firebaseio.com/wallet/${token}/${walletCard.id}.json`
            );

            if (response.data !== null) {
                await axios.patch(
                    `https://nftshop-4237c-default-rtdb.firebaseio.com/wallet/${token}/${walletCard.id}.json`,
                    { count: walletCard.count + response.data.count }
                );
            } else {
                await axios.put(
                    `https://nftshop-4237c-default-rtdb.firebaseio.com/wallet/${token}/${walletCard.id}.json`,
                    walletCard
                );
            }
            dispatch(buyNFTSlice.actions.buyNFTsSuccess());
            setTimeout(() => {
                dispatch(buyNFTSlice.actions.changeSuccessStatus());
            }, 2000);
        } catch (e: any) {
            dispatch(buyNFTSlice.actions.buyNFTsFailed(e.message));
        }
    };
