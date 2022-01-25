import {
	LEFT_EXOTIC_ANIMALS,
	LEFT_IS_CAPITAL,
	LEFT_IS_CLOSE_TO_COAST,
	LEFT_IS_FAMOUS_FOR_CULINARY,
	LEFT_IS_FAMOUS_FOR_ITS_WATERS,
	LEFT_IS_IN_AMERICAS,
	LEFT_IS_IN_BRASIL,
	LEFT_IS_IN_NORTHEAST,
	RIGHT_EXOTIC_ANIMALS,
	RIGHT_IS_CAPITAL,
	RIGHT_IS_CLOSE_TO_COAST,
	RIGHT_IS_FAMOUS_FOR_CULINARY,
	RIGHT_IS_FAMOUS_FOR_ITS_WATERS,
	RIGHT_IS_IN_AMERICAS,
	RIGHT_IS_IN_BRASIL,
	RIGHT_IS_IN_NORTHEAST,
	START,
} from '../constants'

interface Definition {
	value: string
	currentSymbol: symbol | null
	rightSymbol: symbol | null
	leftSymbol: symbol | null
}

const definitionsFirstLayer: Definition[] = [
	{
		value: 'É uma capital?',
		currentSymbol: Symbol.for(RIGHT_IS_IN_BRASIL),
		leftSymbol: Symbol.for(LEFT_IS_CAPITAL),
		rightSymbol: Symbol.for(RIGHT_IS_CAPITAL),
	},
	{
		value: 'Está em uma das américas?',
		currentSymbol: Symbol.for(LEFT_IS_IN_BRASIL),
		leftSymbol: Symbol.for(LEFT_IS_IN_AMERICAS),
		rightSymbol: Symbol.for(RIGHT_IS_IN_AMERICAS),
	},
]

const definitionsSecondLayer: Definition[] = [
	{
		value: 'Está perto da costa?',
		currentSymbol: Symbol.for(RIGHT_IS_CAPITAL),
		leftSymbol: Symbol.for(LEFT_IS_CLOSE_TO_COAST),
		rightSymbol: Symbol.for(RIGHT_IS_CLOSE_TO_COAST),
	},
	{
		value: 'É famosa por suas águas?',
		currentSymbol: Symbol.for(LEFT_IS_CAPITAL),
		leftSymbol: Symbol.for(LEFT_IS_FAMOUS_FOR_ITS_WATERS),
		rightSymbol: Symbol.for(RIGHT_IS_FAMOUS_FOR_ITS_WATERS),
	},
	{
		value: 'É famosa por sua culinária picante?',
		currentSymbol: Symbol.for(RIGHT_IS_IN_AMERICAS),
		leftSymbol: Symbol.for(LEFT_IS_FAMOUS_FOR_CULINARY),
		rightSymbol: Symbol.for(RIGHT_IS_FAMOUS_FOR_CULINARY),
	},
	{
		value: 'Tem animais exóticos?',
		currentSymbol: Symbol.for(LEFT_IS_IN_AMERICAS),
		leftSymbol: Symbol.for(LEFT_EXOTIC_ANIMALS),
		rightSymbol: Symbol.for(RIGHT_EXOTIC_ANIMALS),
	},
]

const definitionThirdLayer: Definition[] = [
	{
		value: 'Está no nordeste?',
		currentSymbol: Symbol.for(RIGHT_IS_CLOSE_TO_COAST),
		leftSymbol: Symbol.for(LEFT_IS_IN_NORTHEAST),
		rightSymbol: Symbol.for(RIGHT_IS_IN_NORTHEAST),
	},
]

export const definitions: Definition[] = [
	{
		value: 'É no Brasil?',
		currentSymbol: Symbol.for(START),
		leftSymbol: Symbol.for(LEFT_IS_IN_BRASIL),
		rightSymbol: Symbol.for(RIGHT_IS_IN_BRASIL),
	},
	...definitionsFirstLayer,
	...definitionsSecondLayer,
	...definitionThirdLayer,
]
