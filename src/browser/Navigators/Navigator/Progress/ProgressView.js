/* @flow */

import {thunk, html} from 'reflex';
import * as Style from '../../../../common/style';
import * as Layer from '../Layer'

/*::
import * as Ref from '../../../../common/ref';
import type {DOM} from 'reflex';
*/

export const render =
  (ref/*:Ref.Model*/, value/*:number*/)/*:DOM*/ =>
  html.progress
  ( { [ref.name]: ref.value
    , style: Style.mix
      ( styleSheet.base
      , ( value > 0
        ? styleSheet.loading
        : styleSheet.idle
        )
      )
    , min: 0
    , max: 100
    , value
    }
  )

export const view =
  (ref/*:Ref.Model*/, value/*:number*/)/*:DOM*/ =>
  thunk
  ( 'Browser/NavigtorDeck/Navigator/Progress/ProgressView'
  , render
  , ref
  , value
  )

const styleSheet = Style.createSheet
  ( { base:
      { appearance: "none"
      , WebkitAppearance: "none"
      , border: "none"
      , height: "4px"
      , borderRadius: 0
      , boxShadow: "none"
      , color: "#4A90E2"
      , overflow: "hidden"
      , backgroundColor: "inherit"
      , backgroundImage: "linear-gradient(135deg, #4A90E2 calc(100% - 4px), transparent calc(100% - 4px))"
      , backgroundSize: 0

      , position: 'absolute'
      , zIndex: Layer.progress
      , top: '27px'
      , width: "100%"
      }
    , idle:
      { opacity: 0
      }
    , loading:
      { opacity: 1
      }
    }
  )
