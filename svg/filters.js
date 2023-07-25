function Filters() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', width: '0', height: '0' }}
      overflow="hidden"
      version="1.1"
    >
      <defs>
        <filter
          id="teal-white"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.03 1" type="table" />
            <feFuncG tableValues="0.57 1" type="table" />
            <feFuncB tableValues="0.49 1" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="teal-lightgreen"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.03 0.8" type="table" />
            <feFuncG tableValues="0.57 1" type="table" />
            <feFuncB tableValues="0.49 0.53" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="sepia"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.26 0.95" type="table" />
            <feFuncG tableValues="0.19 0.78" type="table" />
            <feFuncB tableValues="0.11 0.59" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="purple-sepia"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.43 0.97" type="table" />
            <feFuncG tableValues="0.06 0.88" type="table" />
            <feFuncB tableValues="0.37 0.79" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="cherry-icecream"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.84 1" type="table" />
            <feFuncG tableValues="0.05 0.94" type="table" />
            <feFuncB tableValues="0.37 0.61" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="blackCurrant-and-mint"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.75 0.53" type="table" />
            <feFuncG tableValues="0.25 0.97" type="table" />
            <feFuncB tableValues="0.64 0.77" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="sea"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.02 0.13 0.8" type="table" />
            <feFuncG tableValues="0.02 0.47 0.97" type="table" />
            <feFuncB tableValues="0.26 0.52 0.48" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="warm-sea"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.29 0.01 0.97" type="table" />
            <feFuncG tableValues="0.12 0.52 0.94" type="table" />
            <feFuncB tableValues="0.37 0.59 0.47" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="spring-grass"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0 0.38 0.92" type="table" />
            <feFuncG tableValues="0.5 0.8 1" type="table" />
            <feFuncB tableValues="0.5 0.56 0.74" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="red-sunset-with-purple"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.52 0.86 0.97" type="table" />
            <feFuncG tableValues="0 0.08 0.81" type="table" />
            <feFuncB tableValues="0.51 0.24 0.05" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="red-sunset"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.27 0.86 0.97" type="table" />
            <feFuncG tableValues="0.01 0.08 0.81" type="table" />
            <feFuncB tableValues="0.02 0.24 0.05" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="gold-sunset"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.27 0.86 1" type="table" />
            <feFuncG tableValues="0.01 0.31 0.95" type="table" />
            <feFuncB tableValues="0.02 0.02 0.02" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="dark-crimson-sepia"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.01 0.52 0.97" type="table" />
            <feFuncG tableValues="0 0.05 0.81" type="table" />
            <feFuncB tableValues="0.02 0.29 0.61" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="dark-blue-sepia"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.29 0.15 0.97" type="table" />
            <feFuncG tableValues="0.04 0.39 0.93" type="table" />
            <feFuncB tableValues="0.32 0.52 0.73" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="dark-green-sepia"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.25 0.39 0.96" type="table" />
            <feFuncG tableValues="0.16 0.52 0.97" type="table" />
            <feFuncB tableValues="0.06 0.39 0.78" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="x-rays"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.98 0.3 0.25" type="table" />
            <feFuncG tableValues="1 0.44 0.24" type="table" />
            <feFuncB tableValues="0.91 0.62 0.39" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="warm-x-rays"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.98 0.75 0.51" type="table" />
            <feFuncG tableValues="1 0.45 0.11" type="table" />
            <feFuncB tableValues="0.91 0.39 0.29" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="golden-x-rays"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.98 1 0.94" type="table" />
            <feFuncG tableValues="1 0.98 0.44" type="table" />
            <feFuncB tableValues="0.91 0.43 0.02" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="purple-warm"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.52 0.97 1" type="table" />
            <feFuncG tableValues="0 0.62 1" type="table" />
            <feFuncB tableValues="0.51 0.39 0.89" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="green-pink-acid"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="1 0.98 0.1" type="table" />
            <feFuncG tableValues="0.17 1 0.82" type="table" />
            <feFuncB tableValues="0.7 0.84 0.67" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter
          id="yellow-blue-acid"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceGraphic"
            result="colormatrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR tableValues="0.01 0.97 0.89" type="table" />
            <feFuncG tableValues="0.38 1 1" type="table" />
            <feFuncB tableValues="1 0.89 0.01" type="table" />
            <feFuncA tableValues="0 1" type="table" />
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter id="noise" width="100%" height="100%" x="0%" y="0%">
          <feTurbulence
            baseFrequency="0.01 0.4"
            numOctaves="2"
            result="NOISE"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="NOISE"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="R"
          />
        </filter>
        <filter id="squiggly-0">
          <feTurbulence
            id="turbulence1"
            baseFrequency="0.02"
            numOctaves="3"
            result="noise"
            seed="0"
          />
          <feDisplacementMap
            id="displacement"
            in="SourceGraphic"
            in2="noise"
            scale="6"
          />
        </filter>
        <filter id="squiggly-1">
          <feTurbulence
            id="turbulence2"
            baseFrequency="0.02"
            numOctaves="3"
            result="noise"
            seed="1"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
        </filter>
        <filter id="squiggly-2">
          <feTurbulence
            id="turbulence3"
            baseFrequency="0.02"
            numOctaves="3"
            result="noise"
            seed="2"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
        </filter>
        <filter id="squiggly-3">
          <feTurbulence
            id="turbulence4"
            baseFrequency="0.02"
            numOctaves="3"
            result="noise"
            seed="3"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
        </filter>
        <filter id="squiggly-4">
          <feTurbulence
            id="turbulence5"
            baseFrequency="0.02"
            numOctaves="3"
            result="noise"
            seed="4"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
        </filter>
        <filter id="posterize">
          <feComponentTransfer>
            <feFuncR tableValues="0 .5 1" type="discrete" />
          </feComponentTransfer>
        </filter>
        <filter
          id="dancing"
          width="140%"
          height="140%"
          x="-20%"
          y="-20%"
          colorInterpolationFilters="linearRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="4 4"
            result="morphology"
          />
          <feFlood floodColor="#30597E" floodOpacity="1" result="flood" />
          <feComposite
            in="flood"
            in2="morphology"
            operator="in"
            result="composite"
          />
          <feComposite
            in="composite"
            in2="SourceAlpha"
            operator="out"
            result="composite1"
          />
          <feTurbulence
            baseFrequency="0.01 0.02"
            result="turbulence"
            stitchTiles="stitch"
            type="fractalNoise"
          />
          <feDisplacementMap
            in="composite1"
            in2="turbulence"
            result="displacementMap"
            scale="17"
          />
          <feMerge result="merge">
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="displacementMap" />
          </feMerge>
        </filter>
        <filter
          id="drops"
          width="140%"
          height="140%"
          x="-20%"
          y="-20%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feTurbulence
            baseFrequency="0.05 0.05"
            result="turbulence"
            seed="3"
            stitchTiles="stitch"
          />
          <feComposite
            in="turbulence"
            in2="SourceGraphic"
            operator="in"
            result="composite"
          />
          <feColorMatrix
            in="composite"
            result="colormatrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 25 -2"
          />
          <feComposite
            in="SourceGraphic"
            in2="colormatrix"
            operator="in"
            result="composite1"
          />
          <feGaussianBlur in="composite1" result="blur" stdDeviation="3 3" />
          <feSpecularLighting
            in="blur"
            lightingColor="#fffffd"
            result="specularLighting"
            specularExponent="20"
            surfaceScale="2"
          >
            <feDistantLight azimuth="-90" elevation="150" />
          </feSpecularLighting>
          <feSpecularLighting
            in="blur"
            lightingColor="#cae1fe"
            result="specularLighting1"
            specularExponent="20"
            surfaceScale="2"
          >
            <feDistantLight azimuth="90" elevation="150" />
          </feSpecularLighting>
          <feSpecularLighting
            in="blur"
            lightingColor="#fcfeff"
            result="specularLighting2"
            specularExponent="35"
            surfaceScale="7"
          >
            <fePointLight x="150" y="50" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specularLighting"
            in2="composite1"
            operator="in"
            result="composite2"
          />
          <feComposite
            in="specularLighting2"
            in2="composite1"
            operator="in"
            result="composite3"
          />
          <feComposite
            in="specularLighting1"
            in2="composite1"
            operator="in"
            result="composite4"
          />
          <feBlend
            in="composite4"
            in2="SourceGraphic"
            mode="multiply"
            result="blend"
          />
          <feBlend in="composite2" in2="blend" result="blend1" />
          <feBlend in="composite3" in2="blend1" result="blend2" />
        </filter>
        <filter id="grain">
          <feTurbulence baseFrequency="0.60,0.90" result="colorNoise" />
          <feColorMatrix
            in="colorNoise"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComposite in2="SourceGraphic" operator="in" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
        <filter id="fluffy" width="100%" height="100%" x="0%" y="0%">
          <feTurbulence
            baseFrequency="0.04"
            numOctaves="5"
            result="fluffyNoise"
            type="fractalNoise"
          />
          <feColorMatrix
            in="fluffyNoise"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
          />
          <feComposite
            in2="SourceGraphic"
            operator="in"
            result="monoFluffyNoise"
          />
          <feBlend in="SourceGraphic" in2="monoFluffyNoise" mode="screen" />
        </filter>
      </defs>
    </svg>
  );
}

export default Filters;
