import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, Currency, Goal, Instrument, ServiceProviderAccount} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_holding_date: {keys: {holding_date: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'holding'},
    plural: 'Holdings',
    foreignKeys: {
      fkidx_holding_service_provider_account_fk_id_spa: {
        name: 'fkidx_holding_service_provider_account_fk_id_spa',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_holding_instrument_fk_id_instrument: {
        name: 'fkidx_holding_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_holding_currency_fk_id_currency: {
        name: 'fkidx_holding_currency_fk_id_currency',
        foreignKey: 'fk_id_currency',
        entityKey: 'id',
        entity: 'Currency'
      },
      fkidx_holding_goal_fk_id_goal: {
        name: 'fkidx_holding_goal_fk_id_goal',
        foreignKey: 'fk_id_goal',
        entityKey: 'id',
        entity: 'Goal'
      }
    },
    hiddenProperties: []
  }
})
export class Holding extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  uniqueId?: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'holding_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  holdingDate: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'investment_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  investmentDate?: Date;

  @property({
    type: 'number',
    required: true,
    default: 0,
    postgresql: {columnName: 'quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  quantity: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'average_price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10}
  })
  averagePricePerUnit?: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
    postgresql: {columnName: 'total_invested_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  totalInvestedAmount: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'current_price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  currentPricePerUnit?: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
    postgresql: {columnName: 'total_current_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalCurrentValue: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'total_commitment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalCommitmentAmount?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'total_drawdown_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalDrawdownAmount?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'sellable_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  sellableQuantity?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'total_interest_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalInterestAmount?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'total_return_of_capital_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalReturnOfCapitalAmount?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'total_return_on_capital_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalReturnOnCapitalAmount?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'dividend_reinvested', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  dividendReinvested?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'dividend_paid', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  dividendPaid?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'total_income', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalIncome?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'accrued_interest', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  accruedInterest?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'absolute_profit_loss', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  absoluteProfitLoss?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'percentage_profit_loss', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  percentageProfitLoss?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'xirr', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  xirr?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'unrealized_short_term_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  unrealizedShortTermCapitalGain?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'unrealized_long_term_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  unrealizedLongTermCapitalGain?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'unrealized_business_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  unrealizedBusinessCapitalGain?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'realized_short_term_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  realizedShortTermCapitalGain?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'realized_long_term_capital_gain', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10}
  })
  realizedLongTermCapitalGain?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'realized_business_capital_gain', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10}
  })
  realizedBusinessCapitalGain?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'unrealized_short_term_capital_quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  unrealizedShortTermCapitalQuantity?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'unrealized_long_term_capital_quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  unrealizedLongTermCapitalQuantity?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'benchmark_total_current_value', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  benchmarkTotalCurrentValue?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'benchmark_xirr', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  benchmarkXirr?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'beginning_market_value', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  beginningMarketValue?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'beginning_market_quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  beginningMarketQuantity?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'flows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  flows?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'inflows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  inflows?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'outflows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  outflows?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'benchmark_flows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  benchmarkFlows?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'benchmark_inflows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  benchmarkInflows?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'benchmark_outflows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  benchmarkOutflows?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'absolute_return', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  absoluteReturn?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'benchmark_absolute_return', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  benchmarkAbsoluteReturn?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'profit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  profit?: number;

  @property({
    type: 'object',
    default: [],
    postgresql: {columnName: 'xirr_data', dataType: 'TEXT', nullable: 'Y'}
  })
  xirrData?: object;

  @property({
    type: 'object',
    default: [],
    postgresql: {columnName: 'benchmark_xirr_data', dataType: 'TEXT', nullable: 'Y'}
  })
  benchmarkXirrData?: object;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'states', dataType: 'TEXT', nullable: 'Y'}
  })
  states?: object;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_zeroised', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isZeroised: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_sell_allowed', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isSellAllowed?: boolean;

  @belongsTo(
    () => ServiceProviderAccount,
    {
      name: 'serviceProviderAccount',
      keyFrom: 'serviceProviderAccountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  serviceProviderAccountId: number;

  @belongsTo(
    () => Instrument,
    {
      name: 'instrument',
      keyFrom: 'instrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  instrumentId: number;

  @belongsTo(
    () => Currency,
    {
      name: 'currency',
      keyFrom: 'currencyId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_currency', dataType: 'INT', nullable: 'Y'}
    }
  )
  currencyId: number;

  @belongsTo(
    () => Goal,
    {
      name: 'goal',
      keyFrom: 'goalId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_goal', dataType: 'INT', nullable: 'Y'}
    }
  )
  goalId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Holding>) {
    super(data);
  }
}

export interface HoldingRelations {
  // describe navigational properties here
}

export type HoldingWithRelations = Holding & HoldingRelations;
