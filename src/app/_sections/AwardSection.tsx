import { AWARDDATA } from '../(assets)/data/award';
import GenericRowWithoutDetail from '../_components/GenericRowWithoutDetail';
import SectionContainer from '../_components/SectionContainer';

const AwardSection = () => {
	return (
		<SectionContainer title={'수상내역'} subtitle={'성과로 증명한 순간들.'}>
			<div className='flex flex-col gap-6'>
				{AWARDDATA.map((item, index) => (
					<GenericRowWithoutDetail key={index} item={item} />
				))}
			</div>
		</SectionContainer>
	);
};

export default AwardSection;
