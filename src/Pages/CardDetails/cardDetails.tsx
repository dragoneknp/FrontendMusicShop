import PageLayout from '../../Layout/pageLayout';
import './cardDetails.scss';
import { cardDetails } from '../../mock/mock';
import CardDetailsMainContent from '../../Components/CardDetailsMainContent/cardDetailsMainContent';
const CardDetails = () => {
    return (
      <PageLayout page={"cardDetails"}>
            <CardDetailsMainContent {...cardDetails}/>
        </PageLayout>
      )
};
export default CardDetails;