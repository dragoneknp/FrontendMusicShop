import Label from "../Label/label";
import "./termsMainContent.scss";
const TermsMainContent = () => {
    const Rule = (props: { text: string; header: string; item: number }) => {
        return (
            <section className="termsMain__rule termsMain-rule">
                <div className="termsMain-rule__header">{`${props.item}.${props.header}`}</div>
                <div className="termsMain-rule__text">{props.text}</div>
            </section>
        );
    };
    return (
        <main className="termsMain">
            <Label
                header={"Terms"}
                breadCrumbs={[
                    { path: "/home", title: "Home" },
                    { title: "Terms" },
                ]}
            />
            <div className="termsMain__container container">
                <section className="termsMain__content">
                    <div className="termsMain__header">Terms of Service</div>
                    <div className="termsMain__lastReviesedDate">
                        LAST REVISED: April 9, 2021
                    </div>
                    <section className="termsMain__rules">
                        <Rule
                            item={1}
                            header={
                                "Acceptance of NFT Terms; Modification of NFT Terms"
                            }
                            text={`Welcome to the Triller NFT Platform owned and operated by Triller, Inc., whose address is at 2121 Avenue of the Stars Suite 2350, Los Angeles, California 90067 (“Company”, “we”, “us”, or “our”). These Terms and Conditions (“NFT Terms”) constitute a legally binding agreement between Company and each registered or unregistered end user (each, a “User”, “you” or “your”) of the Triller NFT Platform located at nft.triller.co or trillfernfts.com or such other URL as may be designated by Company from time to time, as well as any mobile apps or other related services or applications thereto (collectively, the “NFT Platform”).  
The NFT Platform is considered part of the “Platform” as defined in the Triller.co Terms of Service (“Platform Terms”) set forth here.[1]  The Platform Terms are incorporated by reference into these NFT Terms, and govern your use and access of the NFT Platform.  In the event of a conflict between these terms of these NFT Terms and the Platform Terms, the NFT Terms will supersede and control. 
Please carefully review these NFT Terms and the Platform Terms.  By accessing and using the NFT Platform (including by creating an Account (as defined in the Platform Terms) or by purchasing or bidding on any items herein), you are deemed to have read, accepted, executed and agreed to be bound by these NFT Terms (including the Platform Terms as incorporated by reference herein).  We may change or amend the NFT Platform or these NFT Terms at any time at our sole and absolute discretion. Any changes to the NFT Terms will be in effect as of the “LAST REVISED” date referred to at the top of this page.  You acknowledge and agree that the form and nature of the NFT Platform, and any part of it, may change from time to time without prior notice to you, and that we may add new or remove existing features and change any part of the NFT Platform.
`}
                        />
                        <Rule
                            item={2}
                            header={"Certain Definitions"}
                            text={`Any capitalized terms used but not defined in these NFT Terms will have the meaning set forth in the Platform Terms.  For the purposes of these NFT Terms, the following capitalized terms will have the following meanings:
“Company NFT” means an NFT (as defined below) that is sold directly by or on behalf of Company through the NFT Platform, and that is associated with certain Content (as defined below) made available by Company. 
 “Content” means content, materials, art, design, and drawings (in any form or media, including, without limitation, video or photographs).
“NFT” means a non-fungible token implemented on a blockchain using smart contracts, such as a non-fungible token conforming to the ERC-721 standard on the Ethereum blockchain network.  The NFT is separate and distinct from the Content or any other Third Party IP with which it may be linked or associated.
“Third Party IP” means any third party copyrights, trade secrets, trademarks, know-how, patent rights or any other intellectual property rights recognized in any country or jurisdiction in the world.`}
                        />
                        <Rule
                            item={3}
                            header={"NFT Purchases"}
                            text={`The NFT Platform allows you to bid on, purchase and otherwise transact in Company NFTs.  Any Company NFT that you acquire on the NFT Platform is not hosted or stored by Company, but will be in your possession such as in your designated cryptocurrency wallet, and your ownership of the Company NFT will recorded on the applicable blockchain.  Company has no obligation or liability to you for keeping, storing, or helping you recover any Company NFT that you purchase hereunder.   
When you purchase a Company NFT, you own the NFT but you do not own any intellectual property rights in the Content except for the license grants expressly set forth herein. 
In certain instances, a purchase of a Company NFT may come with a commitment by the Company that the Company NFT will be “one of a kind” or a similar designation (“Unique NFT”).  In such an instance, Company commits that it will not sell any other NFT featuring the same Content as associated with such Unique NFT. Company will also provide you such documentation as determined by Company that attests that Company has not sold or distributed or otherwise made available any other NFT that is associated with the same Content as associated with your Unique NFT.
For clarity, Company does not represent, warrant or guarantee that others have not created or downloaded their own copies of such Content (including via unauthorized ripping or downloading of such Content), or that others will not attempt to sell their own NFTs featuring such Content.  Company has no obligation or liability to take down such other NFTs featuring such Content.  Further, the foregoing does not restrict the Company from selling other Content of the same event as featured in any Unique NFT, as long as such other Content is different from the Content of the Unique NFT (e.g., different clip length, camera angle, background music, etc.).`}
                        />
                        <Rule
                            item={4}
                            header={"License to Content"}
                            text={`If you purchase a Company NFT through the NFT Platform, then subject to your compliance with these NFT Terms, Company hereby grants you a worldwide, non-exclusive, non-transferable, royalty-free license to use, copy, and display the Content for such purchased Company NFT, solely for the following purposes: (a) for your own personal, non-commercial use; (b) as part of a marketplace that permits the purchase and sale of your Company NFTs, provided that the marketplace cryptographically verifies each Company NFT’s owner’s rights to display the Content for their Company NFT to ensure that only the actual owner can display the Content; or (c) as part of a third party website or application that permits the inclusion, involvement, or participation of your Company NFT, provided that the website/application cryptographically verifies each Company NFT’s owner’s rights to display the Content for their Company NFT to ensure that only the actual owner can display the Content, and provided that the Content is no longer visible once the owner of the Company NFT leaves the website/application.  This license only lasts as long as you are the valid owner and holder of the Company NFT associated with the licensed Content.  If you sell or transfer the Company NFT to another person, this license will transfer to such other owner or holder of the Company NFT, and you will no longer have the benefits of such license.
As between any User and Company, Company retains all right, title and interest in and to the NFT Platform and Content, throughout the world, in perpetuity.  The Content and all intellectual property rights in and to the NFT Platform are considered “Platform IP” as set forth in the Platform Terms.
You agree that you may not, nor permit any third party to do or attempt to do any of the foregoing without our (or, as applicable, our licensors’) express prior written consent in each case: (a) modify the Content for your Company NFT in any way, including, without limitation, the shapes, designs, drawings, attributes, or color schemes; (b) use the Content for your Company NFT to advertise, market, or sell any third party product or service; (c) use the Content for your Company NFT in connection with images, videos, or other forms of media that depict hatred, intolerance, violence, cruelty, or anything else that could reasonably be found to constitute hate speech or otherwise infringe upon the rights of others; (d) sell, distribute for commercial gain (including, without limitation, giving away in the hopes of eventual commercial gain), or otherwise commercialize merchandise that includes, contains, or consists of the Content for your Company NFT; (e) attempt to trademark, copyright, or otherwise acquire additional intellectual property rights in or to the Content for your Company NFT; or (f) otherwise utilize the Content for your Company NFT for your or any third party’s commercial benefit.
If the Content associated with your Company NFT contains Third Party IP (e.g., licensed intellectual property from any rights holder, such as music performance rights or publicity rights), you understand and agree as follows: (a) that you will not have the right to use such Third Party IP in any way except as incorporated in the Content for your Company NFT, and subject to the license and restrictions contained herein; (b) that, depending on the nature of the license granted from the owner of the Third Party IP, we may need to (and reserve every right to) pass through additional restrictions on your ability to use the Content; and (c) to the extent that we inform you of such additional restrictions in writing, you will be responsible for complying with all such restrictions from the date that you receive the notice, and that failure to do so will be deemed a breach of the license contained herein.`}
                        />
                        <Rule
                            item={5}
                            header={"Auction Terms"}
                            text={`The Company NFTs may be sold by Company as part of an auction.  You will be permitted to submit bids for a Company NFT through the NFT Platform or such other means that Company designates in its sole discretion.  You must pay for the purchase via the currency set forth by Company, which may be in dollars or cryptocurrency.  Company may set minimum bid amounts for any Company NFT auction. 
As soon as you place and confirm your bid amount, you agree that you may not, under any circumstances, amend, retract or revoke your bid. Company is not responsible for any errors made in your bidding. Company reserves the right, in its sole and absolute discretion to reject, revoke or refuse to accept any bid (even those that have been previously accepted); to withdraw any Company NFT from being eligible for purchase, whether during or after the sale, including for failing to meet any reserve prices; to restart or continue the bidding even if the bidding has finished; or in the case of error or dispute and whether during or after the sale, to continue the bidding, determine the successful bidder, cancel the sale of the lot, or re-offer and re-sell any lot. If any dispute relating to bidding arises during or after the sale, Company’s decision in exercise of this option is absolute and final.
Bids may only be submitted between the dates and times specified for that Company NFT, or as otherwise permitted by Company in its sole discretion.  However, Company may extend the bidding window to always ensure a buffer period (such as five minutes) exists between the last bid and closing time of that bidding window. These extensions may continue indefinitely until there is no more bidding activity on the Company NFT for such designated period.
The purchase price of any auction will include the hammer price and the buyer’s premium (in the case of a sale by auction) or a “Buy Now” price if that is offered by the Company, as well as any all shipping and related costs and charges, any applicable duties, goods, sales use, compensating or service tax or VAT. 
Company may provide a “Buy Now” feature that allows you to pay for a Company NFT at a specific price without bidding during an auction. If you purchase such a lot at the “Buy Now” price, these NFT Terms and auction terms will apply to the purchase or bid in the same manner as if you had been the successful bidder in an auction for that Company NFT.`}
                        />
                        <Rule
                            item={6}
                            header={"Verification and Payment"}
                            text={`In the event you are a winning purchaser of a Company NFT, you must pay the purchase price within 1 business day after the close of the auction, or such other time as may be specified in the particulars of the Company NFT auction or sale. 
You will not be eligible to collect your purchased Company NFT until after Company has received all applicable purchase amounts from you, and Company completes all purchaser identification and registration procedures, including, but not limited to, completing any anti-money laundering and/or anti-terrorism financing checks, that Company may require to its satisfaction. If in our opinion, you do not satisfy our bidder identification and registration procedures, we may refuse to register you to bid or permit your participation in the sale and if you make a successful bid, we may cancel your bid and sell the Company NFT to another person.
Once Company has completed all bidder identification and registration procedures set forth above, Company will contact the buyer of a Company NFT to arrange for secure transmission of the purchased Company NFT via a crpytocurrency wallet or other mutually agreed upon means.  Such buyer is solely responsible for any errors that may occur in such transfer due to providing us incorrect information about their wallet, its keys, or other relevant information required to facilitate such transfer. 
When you make purchases through the NFT Platform, including, without limitation, any purchase for Company NFTs, you must provide and maintain valid payment information (e.g., credit card number) in connection with your Account with us.  You represent and warrant that you are authorized to use the payment method you use via the NFT Platform to make any purchase. You authorize us (or the provider of any subscription to which you subscribe) to charge your payment method for the total amount of your purchase (including any applicable taxes). Your order may be suspended or cancelled for any reason, including if the payment method cannot be verified, is invalid or is otherwise not acceptable.  Other payments terms for purchases are set forth in the payments sections of the Platform Terms. 
We have no liability to you or to any third party for any claims or damages that may arise as a result of any payments or transactions that you engage in via the NFT Platform, or any other payment or transactions that you conduct via the NFT Platform. We do not provide refunds for any purchases that you might make on or through the NFT Platform – whether for Company NFTs or anything else.
You will be solely responsible to pay any and all sales, use, value-added and other taxes, duties, and assessments (except taxes on our net income) now or hereafter claimed or imposed by any governmental authority associated with your use of the NFT Platform or Company NFTs, except for income taxes levied on us as a result of any such purchases of Company NFTs.`}
                        />
                        <Rule
                            item={7}
                            header={"Assumption of Risks"}
                            text={`You acknowledge and agree that there are risks associated with purchasing and holding NFTs and using blockchain technology. These including, but are not limited to, risk of losing access to NFT due to loss of private key(s), custodial error or purchaser error, risk of mining or blockchain attacks, risk of hacking and security weaknesses, risk of unfavorable regulatory intervention in one or more jurisdictions, risks related to token taxation, risk of personal information disclosure, risk of uninsured losses, unanticipated risks, and volatility risks.
The prices of collectible blockchain assets are extremely volatile and subjective and collectible blockchain assets have no inherent or intrinsic value. Each Company NFT has no inherent or intrinsic value.
There are risks associated with using an Internet-based currency, including, but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your electronic wallet. You accept and acknowledge that we will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using any blockchain network, however caused.  You acknowledge that you have obtained sufficient information to make an informed decision to purchase an NFT, including carefully reviewing the code of the smart contract and the NFT and fully understand and accept the functions of the same.
The regulatory regime governing blockchain technologies, cryptocurrencies and tokens is uncertain, and new regulations or policies may materially adversely affect the development of the NFT Platform, and therefore the potential utility or value of your Company NFTs. Upgrades to any blockchain network or hard forks in such networks, or a change in how transactions are confirmed on such blockchain networks may have unintended, adverse effects on all blockchains, including any that are related to your Company NFTs. 
Any purchase or sale you make, accept or facilitate outside of the NFT Platform of an NFT will be entirely at your risk. We do not control or endorse purchases or sales of NFTs outside of the NFT Platform. We expressly deny and disclaim any liability to you and deny any obligation to indemnify you or hold you harmless for any losses you may incur by transacting, or facilitating transactions, in NFTs outside of the NFT Platform.
We will not be liable or responsible to you, nor be deemed to have defaulted under or breached these NFT Terms, for any failure or delay in fulfilling or performing any of our obligations under these NFT Terms or in operating the NFT Platform,  when and to the extent such failure or delay is caused by or results from any events beyond Company’s ability to control, including acts of God; flood, fire, earthquake, epidemics, pandemics, tsunami, explosion, war, invasion, hostilities (whether war is declared or not), terrorist threats or acts, riot or other civil unrest, government order, law, or action, embargoes or blockades, strikes, labor stoppages or slowdowns or other industrial disturbances, shortage of adequate or suitable Internet connectivity, telecommunication breakdown or shortage of adequate power or electricity, and other similar events beyond our control.`}
                        />
                        <Rule
                            item={8}
                            header={"Contact"}
                            text={`General questions or comments about the NFT Platform or these NFT Terms should be sent either by mail to Curios, Inc., 2121 Avenue of the Stars Suite 2350, Los Angeles, California 90067, or email to Support@curios.com`}
                        />
                    </section>
                </section>
            </div>
        </main>
    );
};
export default TermsMainContent;
