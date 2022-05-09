import { useState } from "react";

import { CloseButton } from "../CloseButton"

import bugImagemUrl from "../../assets/bug.svg";
import ideiaImagemUrl from "../../assets/ideia.svg";
import outrosImagemUrl from "../../assets/outros.svg";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImagemUrl,
            alt: 'Imagem de uma caveira'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideiaImagemUrl,
            alt: 'Imagem de uma lámpada'
        },
    },

    OTHER: {
        title: 'Outro',
        image: {
            source: outrosImagemUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedBackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedBackTypeStep onFeedBackTypeChanged={setFeedbackType} /> 
                    ) : (
                        <FeedBackContentStep 
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            ) }

            <footer className="text-xs text-neutral-400">
                Feito com 💜 pelo <a className="underline underline-offset-2" href="https://ceappedreira.org.br/">Ceap</a>
            </footer>
        </div>
    );
}