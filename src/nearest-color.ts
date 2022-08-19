import { flow, pipe } from 'fp-ts/function'
import * as RA from 'fp-ts/ReadonlyArray'
import * as N from 'fp-ts/number'
import * as Mn from 'fp-ts/Monoid'
import * as Sg from 'fp-ts/Semigroup'
import * as RTup from 'fp-ts/ReadonlyTuple'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'

export const euclidean_distance = (
  a: ReadonlyArray<number>,
  b: ReadonlyArray<number>,
): number =>
  pipe(
    RA.zip(a, b),
    RA.foldMap(N.MonoidSum)(([a, b]) => (b - a) ** 2),
    Math.sqrt,
  )

export const nearest_neighbor = <ColorType extends ReadonlyArray<number>>(
  color: ColorType,
): ((colorSet: RNEA.ReadonlyNonEmptyArray<ColorType>) => ColorType) =>
  flow(
    RNEA.foldMap(Sg.tuple(Sg.min(N.Bounded), Sg.first<ColorType>()))((a) => [
      euclidean_distance(a, color),
      a,
    ]),
    RTup.snd,
  )
