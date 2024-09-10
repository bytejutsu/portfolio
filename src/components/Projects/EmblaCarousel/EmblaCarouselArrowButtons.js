"use client";

import { useCallback, useEffect, useState } from 'react';
import styles from './EmblaCarousel.module.css';
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import {FcNext, FcPrevious} from "react-icons/fc";



export const usePrevNextButtons = (emblaApi, onButtonClick) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

export const PrevButton = (props) => {
    const { children, ...restProps } = props

    return (
        <CyberpunkButton {...restProps} cutoutCorners={["bottom-left"]}>
            <FcPrevious className="text-2xl text-center lg:text-4xl" />
            {children}
        </CyberpunkButton>
    )
}

export const NextButton = (props) => {
    const { children, ...restProps } = props

    return (
        <CyberpunkButton {...restProps} cutoutCorners={["bottom-right"]}>
            <FcNext className="text-2xl text-center lg:text-4xl" />
            {children}
        </CyberpunkButton>
    )
}
