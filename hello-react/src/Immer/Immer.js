import produce from 'immer'

const nextStage = produce(originalState, draft => {
    draft.somewhere.deep.inside =5;
})