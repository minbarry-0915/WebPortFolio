import GenericRowWithoutDetail from '../_components/GenericRowWithoutDetail';
import SectionContainer from '../_components/SectionContainer';
import { supabase } from '../util/supabase/client';

const AwardSection = async () => {
	const { data: awards, error } = await supabase
		.from<'award', AwardRowProps>('award')
		.select('*')
		.order('issuedate', { ascending: false });

	console.log('Fetched awards:', awards);

	if (error) {
		console.error('Error fetching awards:', error);
		return <div>수상내역을 불러오는 중 오류가 발생했습니다.</div>;
	}

	return (
		<SectionContainer title={'수상내역'} subtitle={'성과로 증명한 순간들.'}>
			<div className='flex flex-col gap-6'>
				{awards.map((item, index) => (
					<GenericRowWithoutDetail key={index} item={item} />
				))}
			</div>
		</SectionContainer>
	);
};

export default AwardSection;
