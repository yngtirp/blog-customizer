import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { defaultArticleState } from 'src/constants/articleProps';
import styles from '../../styles/index.module.scss';
import { useState, CSSProperties } from 'react';
import '../../styles/index.scss';

export const App = () => {
	const [pageState, setPageState] = useState(defaultArticleState);
	const [isFormOpen, setFormOpen] = useState(false);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': pageState.fontFamilyOption.value,
					'--font-size': pageState.fontSizeOption.value,
					'--font-color': pageState.fontColor.value,
					'--container-width': pageState.contentWidth.value,
					'--bg-color': pageState.backgroundColor.value,
				} as CSSProperties
			}>
				<ArticleParamsForm
					toggleOpenFunction={() => setFormOpen(!isFormOpen)}
					isOpen={isFormOpen}
					setPageState={setPageState}
					setOpen={setFormOpen}
				/>
			<Article />
		</main>
	);
};