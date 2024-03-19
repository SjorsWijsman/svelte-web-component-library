<script>
    import Cloud from "./cloud.svg?raw"
    import Arrow from "./arrow.svg?raw"
    import FileText from "../icons/file-text.svg?raw"
    import Image from "../icons/image.svg?raw"
    import Database from "../icons/database.svg?raw"
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { fade } from 'svelte/transition';

    const animationDuration = 8000
    const progressDelay = 500

    const progress = tweened(0, {
        duration: animationDuration,
        easing: cubicOut
    });

    let down = false
    let rain = false
    let clickCount = 0

    function handleClick() {
        if (clickCount >= 2) {
            rain = true

            setTimeout(() => {
                progress.duration = animationDuration
                $progress = 100
            }, progressDelay);

            setTimeout(() => {
                down = false
                rain = false

                progress.duration = 0
                $progress = 0

                clickCount = 0
            }, animationDuration);
        } else {
            down = !down
            clickCount++
        }
    }

    let iconList = [FileText, Image, Database]
</script>

<div class="image-container">
    {#if rain}
        <p 
            class="progress"
            class:rain
            class:finished={Math.round($progress) >= 100}
            in:fade={{delay: progressDelay, duration: progressDelay}}
            out:fade
        >
            {Math.round($progress)}%
        </p>
    {/if}
    {@html Cloud}
    <button class="arrow" on:click={handleClick} class:down class:rain>
        {@html Arrow}
    </button>
    <div class="rain-container" class:rain>
        {#each [...Array(30)] as _}
            <div 
                style:left={`${90 * Math.random()}%`}
                style:opacity={`${80 * Math.random() + 10}%`}
                style:animation-delay={`-${Math.random() * 5}s`}
                style:animation-duration={`${Math.random() + 0.5}s`}
            >
                {@html iconList[Math.floor(Math.random()*iconList.length)]}                    
            </div>
        {/each}
    </div>
</div>

<style>
    .image-container > :global(svg) {
        position: relative;
        width: 14rem;
        height: 100%;
        top: -1rem;
        left: 50%;
        transform: translateX(-50%);
        filter: drop-shadow(0 0 1rem #0F1862);
    }

    .arrow {
        position: absolute;
        left: 50%;
        bottom: 0.5rem;
        width: 5.5rem;
        height: 5.5rem;
        padding: 1.25rem;
        border-radius: 50%;
        background: linear-gradient(to bottom, #101865, #151D30);
        transform: translateX(-50%);
        transition-duration: .8s;
        transition-property: transform, opacity;
        transition-timing-function: cubic-bezier(.27,-0.45,.56,1.35);
        cursor: pointer;
        border: 0px solid transparent;
    }

    .arrow.down {
        transform: translateX(-50%) rotate(180deg);
    }

    .arrow.rain {
        transform: translateX(-50%) rotate(180deg) scale(0);
        opacity: 0;
    }

    .arrow > :global(svg) {
        width: 100%;
        height: 100%;
    }

    .rain-container {
        display: block;
        position: absolute;
        left: 50%;
        bottom: -1rem;
        width: 13rem;
        height: 7rem;
        transform: translateX(-50%);
        overflow: hidden;
        z-index: -1;
        opacity: 0;
        pointer-events: none;
        user-select: none;
        transition-delay: .2s;
        transition: opacity 1.5s ease-out;
    }

    .rain-container.rain {
        opacity: 1;
    }

    .rain-container div {
        position: absolute;
        color: #6296EB;
        animation: 0.8s raindrop ease-in infinite;
        width: 1.5rem;
        height: 1.5rem;
    }

    .rain-container div :global(svg) {
        width: 100%;
        height: 100%;
    }

    @keyframes raindrop {
        from {
            top: 100%;
            opacity: 0;
        }
        to {
            top: -20%;
            opacity: inherit;
        }
    }

    p.progress {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        font-size: 2rem;
        font-weight: bold;
        color: var(--color-blue-light);
        transform: translate(-50%, -50%);
        margin: 0;
    }

    p.progress.finished {
        color: var(--color-white);
        transform: translate(-50%, -50%) scale(1.1);
    }
</style>