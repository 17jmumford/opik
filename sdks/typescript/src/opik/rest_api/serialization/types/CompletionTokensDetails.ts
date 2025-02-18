/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const CompletionTokensDetails: core.serialization.ObjectSchema<
    serializers.CompletionTokensDetails.Raw,
    OpikApi.CompletionTokensDetails
> = core.serialization.object({
    reasoningTokens: core.serialization.property("reasoning_tokens", core.serialization.number().optional()),
});

export declare namespace CompletionTokensDetails {
    export interface Raw {
        reasoning_tokens?: number | null;
    }
}
