import {
	LEFT_BEST_SALARIES_IN_WORLD,
	LEFT_EXOTIC_ANIMALS,
	LEFT_HAS_A_BIG_STRAIGHT_TOWER,
	LEFT_HAS_HOT_WATERS,
	LEFT_IS_ABROAD_CAPITAL,
	LEFT_IS_AN_ISLAND,
	LEFT_IS_CAPITAL,
	LEFT_IS_CLOSE_TO_COAST,
	LEFT_IS_FAMOUS_FOR_CULINARY,
	LEFT_IS_FAMOUS_FOR_ITS_WATERS,
	LEFT_IS_IN_AMERICAS,
	LEFT_IS_IN_BRASIL,
	LEFT_IS_IN_NORTHEAST,
	LEFT_IS_KNOWN_FOR_HUMID_FLORA,
	LEFT_ITALIAN_AND_GERMANY_CULINARY,
	RIGHT_BEST_SALARIES_IN_WORLD,
	RIGHT_EXOTIC_ANIMALS,
	RIGHT_HAS_A_BIG_STRAIGHT_TOWER,
	RIGHT_HAS_HOT_WATERS,
	RIGHT_IS_ABROAD_CAPITAL,
	RIGHT_IS_AN_ISLAND,
	RIGHT_IS_CAPITAL,
	RIGHT_IS_CLOSE_TO_COAST,
	RIGHT_IS_FAMOUS_FOR_CULINARY,
	RIGHT_IS_FAMOUS_FOR_ITS_WATERS,
	RIGHT_IS_IN_AMERICAS,
	RIGHT_IS_IN_BRASIL,
	RIGHT_IS_IN_NORTHEAST,
	RIGHT_IS_KNOWN_FOR_HUMID_FLORA,
	RIGHT_ITALIAN_AND_GERMANY_CULINARY,
	START,
} from '../constants'

export interface Definition {
	value: string
	currentSymbol: symbol
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
	{
		value: 'É conhecido pela sua flora úmida?',
		currentSymbol: Symbol.for(LEFT_IS_CLOSE_TO_COAST),
		leftSymbol: Symbol.for(LEFT_IS_KNOWN_FOR_HUMID_FLORA),
		rightSymbol: Symbol.for(RIGHT_IS_KNOWN_FOR_HUMID_FLORA),
	},
	{
		value: 'Tem águas quentes?',
		currentSymbol: Symbol.for(RIGHT_IS_FAMOUS_FOR_ITS_WATERS),
		leftSymbol: Symbol.for(LEFT_HAS_HOT_WATERS),
		rightSymbol: Symbol.for(RIGHT_HAS_HOT_WATERS),
	},
	{
		value: 'Tem a culinária derivada de italiana e alemã?',
		currentSymbol: Symbol.for(LEFT_IS_FAMOUS_FOR_ITS_WATERS),
		leftSymbol: Symbol.for(LEFT_ITALIAN_AND_GERMANY_CULINARY),
		rightSymbol: Symbol.for(RIGHT_ITALIAN_AND_GERMANY_CULINARY),
	},
	{
		value: 'É capital?',
		currentSymbol: Symbol.for(RIGHT_IS_FAMOUS_FOR_CULINARY),
		leftSymbol: Symbol.for(LEFT_IS_ABROAD_CAPITAL),
		rightSymbol: Symbol.for(RIGHT_IS_ABROAD_CAPITAL),
	},
	{
		value: 'Tem um das maiores médias saláriais do mundo?',
		currentSymbol: Symbol.for(LEFT_IS_FAMOUS_FOR_CULINARY),
		leftSymbol: Symbol.for(LEFT_BEST_SALARIES_IN_WORLD),
		rightSymbol: Symbol.for(RIGHT_BEST_SALARIES_IN_WORLD),
	},
	{
		value: 'Está uma ilha?',
		currentSymbol: Symbol.for(RIGHT_EXOTIC_ANIMALS),
		leftSymbol: Symbol.for(LEFT_IS_AN_ISLAND),
		rightSymbol: Symbol.for(RIGHT_IS_AN_ISLAND),
	},
	{
		value: 'Tem uma grande torre reta?',
		currentSymbol: Symbol.for(LEFT_EXOTIC_ANIMALS),
		leftSymbol: Symbol.for(LEFT_HAS_A_BIG_STRAIGHT_TOWER),
		rightSymbol: Symbol.for(RIGHT_HAS_A_BIG_STRAIGHT_TOWER),
	},
]

const definitionFourthLayer: Definition[] = [
  {
		value: 'Salvador',
		currentSymbol: Symbol.for(RIGHT_IS_IN_NORTHEAST),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Rio de Janeiro',
		currentSymbol: Symbol.for(LEFT_IS_IN_NORTHEAST),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Goiânia',
		currentSymbol: Symbol.for(RIGHT_IS_KNOWN_FOR_HUMID_FLORA),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Cuiabá',
		currentSymbol: Symbol.for(LEFT_IS_KNOWN_FOR_HUMID_FLORA),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Pirenópolis',
		currentSymbol: Symbol.for(RIGHT_HAS_HOT_WATERS),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Foz do Iguaçu',
		currentSymbol: Symbol.for(LEFT_HAS_HOT_WATERS),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Gramado',
		currentSymbol: Symbol.for(RIGHT_ITALIAN_AND_GERMANY_CULINARY),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Campos do Jordão',
		currentSymbol: Symbol.for(LEFT_ITALIAN_AND_GERMANY_CULINARY),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Cidade do México',
		currentSymbol: Symbol.for(RIGHT_IS_ABROAD_CAPITAL),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Buffalo',
		currentSymbol: Symbol.for(LEFT_IS_ABROAD_CAPITAL),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Palo Alto',
		currentSymbol: Symbol.for(RIGHT_BEST_SALARIES_IN_WORLD),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Washington',
		currentSymbol: Symbol.for(LEFT_BEST_SALARIES_IN_WORLD),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Antananarivo',
		currentSymbol: Symbol.for(RIGHT_IS_AN_ISLAND),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Primorsky',
		currentSymbol: Symbol.for(LEFT_IS_AN_ISLAND),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Paris',
		currentSymbol: Symbol.for(RIGHT_HAS_A_BIG_STRAIGHT_TOWER),
		leftSymbol: null,
		rightSymbol: null,
	},
	{
		value: 'Madrid',
		currentSymbol: Symbol.for(LEFT_HAS_A_BIG_STRAIGHT_TOWER),
		leftSymbol: null,
		rightSymbol: null,
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
	...definitionFourthLayer,
]
