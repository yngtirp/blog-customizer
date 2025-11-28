import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import { Select } from 'src/ui/select';
import { Text } from 'src/ui/text';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import {
	fontFamilyOptions,
	defaultArticleState,
	ArticleStateType,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { OnClick } from 'src/ui/arrow-button/ArrowButton';
import { Separator } from 'src/ui/separator';

export type ArticleParamsFormProps = {
	toggleOpenFunction: OnClick;
	isOpen: boolean;
	setPageState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
};

export const ArticleParamsForm = ({
	toggleOpenFunction,
	isOpen,
	setPageState,
}: ArticleParamsFormProps) => {
	const [formState, setFormState] = useState(defaultArticleState);

	const handleSubmitForm = (evt: React.SyntheticEvent) => {
		evt.preventDefault();
		setPageState(formState);
	};

	const handleResetFrom = () => {
		setPageState(defaultArticleState);
		setFormState(defaultArticleState);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleOpenFunction} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={handleSubmitForm}>
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) => {
							setFormState((prevState) => ({
								...prevState,
								fontFamilyOption: selected,
							}));
						}}
					/>
					<RadioGroup
						title='размер шрифта'
						name='font-size'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={(selected) => {
							setFormState((prevState) => ({
								...prevState,
								fontSizeOption: selected,
							}));
						}}
					/>
					<Select
						title='цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={(select) => {
							setFormState((prev) => ({ ...prev, fontColor: select }));
						}}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(select) => {
							setFormState((prev) => ({ ...prev, backgroundColor: select }));
						}}
					/>
					<Select
						title='ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(select) => {
							setFormState((prev) => ({ ...prev, contentWidth: select }));
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleResetFrom}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
