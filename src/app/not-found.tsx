import { Sidebar } from '@/components'

export default function NotFound() {
    return (
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex">
                <Sidebar />
                <div className='p-2 w-full text-slate-900'>
                    {
                        <div className="w-full h-screen flex flex-col items-center justify-center">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="205.000000pt" viewBox="0 0 300.000000 205.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,205.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M956 1864 c-27 -26 -15 -51 30 -63 16 -4 29 -14 29 -22 0 -14 -11 -15 -49 -8 -10 2 -21 -1 -23 -8 -6 -17 60 -27 86 -14 35 19 26 50 -19 68 -22 9 -40 20 -40 25 0 4 18 8 40 8 43 0 54 14 18 24 -37 9 -56 7 -72 -10z" /> <path d="M1205 1868 c-27 -15 -35 -28 -35 -60 0 -35 35 -68 72 -68 34 0 78 40 78 70 0 28 -43 70 -72 70 -13 0 -32 -6 -43 -12z m75 -37 c18 -35 -18 -79 -54 -65 -22 8 -31 51 -16 69 18 21 57 19 70 -4z" /> <path d="M1455 1872 c-5 -4 -10 -35 -11 -69 -1 -56 1 -63 18 -63 14 0 18 6 16 22 -4 31 18 33 38 4 9 -14 26 -26 37 -26 20 0 20 1 -4 26 -22 23 -23 26 -6 35 9 6 17 21 17 34 0 19 -7 26 -37 34 -45 13 -55 13 -68 3z m75 -42 c0 -16 -7 -20 -30 -20 -23 0 -30 4 -30 20 0 16 7 20 30 20 23 0 30 -4 30 -20z" /> <path d="M1703 1874 c-9 -4 -13 -28 -13 -71 0 -56 2 -64 17 -61 10 2 18 10 18 18 0 28 31 28 40 0 3 -11 15 -20 26 -20 24 0 24 8 2 33 -17 18 -17 19 0 28 20 12 22 42 5 57 -16 13 -78 23 -95 16z m72 -44 c0 -9 -11 -16 -27 -18 -23 -3 -28 1 -28 18 0 17 5 21 28 18 16 -2 27 -9 27 -18z" /> <path d="M1920 1872 c0 -4 11 -24 25 -42 19 -26 24 -42 19 -62 -5 -24 -2 -28 15 -28 17 0 21 6 21 32 0 18 11 45 25 64 33 43 12 60 -21 19 -25 -31 -25 -31 -43 3 -11 21 -41 31 -41 14z" /> <path d="M1265 1566 c-63 -29 -128 -95 -162 -166 -24 -47 -27 -68 -27 -145 0 -74 4 -97 21 -130 31 -55 52 -79 97 -109 61 -40 82 -35 151 37 124 130 221 401 174 489 -28 51 -167 65 -254 24z m123 -43 c-25 -27 -54 -63 -64 -80 -14 -25 -25 -33 -45 -33 -41 0 -58 -9 -74 -41 -20 -37 -19 -79 1 -108 15 -21 15 -29 -1 -98 -18 -75 -18 -75 -35 -53 -10 13 -26 69 -36 124 l-19 101 -3 -65 c-4 -76 16 -135 61 -186 16 -19 26 -38 22 -42 -9 -9 -59 51 -81 96 -21 46 -29 137 -15 188 15 55 81 156 122 185 44 31 124 58 174 59 l39 0 -46 -47z m113 6 c24 -46 -7 -181 -70 -308 -52 -105 -104 -171 -155 -198 -27 -14 -31 -14 -44 3 -16 21 -11 116 8 172 10 27 17 32 45 32 68 0 112 69 81 128 -9 17 -21 32 -28 34 -28 10 100 158 136 158 9 0 20 -10 27 -21z m-174 -154 c70 -49 0 -160 -76 -120 -47 24 -55 74 -19 112 25 26 64 30 95 8z" /> <path d="M1256 1345 c-20 -21 -20 -39 0 -59 20 -21 30 -20 55 5 18 18 19 23 6 42 -18 28 -40 32 -61 12z" /> <path d="M657 1438 c-306 -495 -297 -478 -297 -547 l0 -62 180 3 180 3 0 -108 0 -108 66 3 67 3 -2 106 -2 107 51 -2 52 -1 1 63 2 62 -53 0 -54 0 3 76 4 76 -68 1 -67 2 0 -77 0 -78 -100 0 c-90 0 -118 8 -90 25 5 3 60 90 121 193 62 103 125 206 141 229 15 23 28 44 28 47 0 3 -34 6 -75 6 -67 0 -76 -2 -88 -22z m83 -31 c0 -7 -5 -18 -12 -25 -7 -7 -9 -12 -5 -12 4 0 -10 -26 -32 -57 -21 -32 -46 -71 -55 -88 -9 -16 -39 -66 -66 -110 -27 -44 -49 -86 -50 -92 0 -7 -4 -13 -10 -13 -5 0 -10 -13 -10 -29 0 -46 30 -61 125 -61 111 1 131 20 134 126 1 12 8 24 16 28 24 9 45 -22 45 -69 0 -35 5 -48 26 -64 15 -12 35 -21 46 -21 32 0 19 -42 -15 -51 -45 -12 -56 -36 -57 -115 0 -75 -13 -100 -44 -88 -13 5 -16 21 -16 79 0 60 -4 76 -23 98 -22 26 -24 26 -177 29 l-155 3 -3 32 c-3 31 31 97 135 262 13 20 26 43 30 51 3 8 22 36 40 63 19 26 32 47 28 47 -3 0 8 20 25 45 22 33 38 45 55 45 14 0 25 -6 25 -13z" /> <path d="M2180 1209 l-153 -251 -1 -65 -2 -64 180 2 180 2 -3 -107 -3 -106 72 0 72 0 -3 108 -4 107 50 -3 50 -3 0 65 0 66 -51 0 -51 0 1 76 1 76 -65 0 -65 0 0 -76 0 -76 -104 0 -103 0 18 28 c40 60 284 461 284 466 0 3 -33 6 -73 6 l-74 0 -153 -251z m220 197 c0 -8 -17 -42 -37 -76 -21 -33 -42 -69 -48 -78 -35 -59 -90 -148 -94 -152 -13 -11 -61 -109 -61 -124 0 -8 10 -24 22 -36 18 -17 35 -20 105 -20 78 0 86 2 108 26 20 21 25 38 25 75 0 45 2 49 24 49 27 0 36 -16 36 -64 0 -42 34 -86 65 -86 13 0 27 -5 30 -10 9 -14 -13 -40 -34 -40 -9 -1 -26 -9 -37 -19 -18 -14 -22 -31 -25 -98 -4 -88 -11 -103 -37 -87 -13 8 -18 31 -23 85 -6 87 -13 105 -42 113 -12 3 -86 6 -164 6 -210 0 -213 -22 47 401 41 67 81 128 88 136 18 17 52 17 52 -1z" /> <path d="M1475 911 c-86 -14 -133 -31 -165 -57 -26 -22 -30 -33 -30 -72 0 -101 78 -201 189 -243 79 -30 205 -24 276 13 93 49 145 120 160 220 7 45 5 50 -24 77 -20 18 -53 34 -97 45 -79 20 -238 28 -309 17z m290 -36 c106 -27 143 -74 85 -108 -131 -78 -545 -49 -545 38 0 24 52 55 119 71 74 18 269 17 341 -1z m-326 -166 c47 -9 59 -15 73 -40 34 -58 122 -58 152 0 12 23 25 29 77 39 34 6 80 20 101 31 l40 19 -7 -26 c-10 -43 -52 -100 -97 -132 -166 -120 -415 -47 -473 138 l-7 23 42 -21 c23 -12 67 -26 99 -31z m214 -24 c-8 -22 -58 -46 -80 -38 -23 8 -53 33 -53 45 0 4 31 8 70 8 58 0 68 -2 63 -15z" /> <path d="M1408 433 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" /> <path d="M938 423 c23 -2 59 -2 80 0 20 2 1 4 -43 4 -44 0 -61 -2 -37 -4z" /> <path d="M1928 423 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" /> <path d="M693 413 c7 -7 139 -5 146 3 2 2 -31 4 -74 4 -43 0 -75 -3 -72 -7z" /> <path d="M2175 414 c48 -8 115 -9 115 -2 0 5 -30 7 -67 7 -38 -1 -59 -3 -48 -5z" /> <path d="M403 383 c-13 -2 -23 -8 -23 -13 0 -11 64 -24 82 -17 7 3 2 6 -12 7 -25 2 -25 2 5 15 l30 14 -30 -1 c-16 0 -40 -3 -52 -5z" /> <path d="M2520 378 c28 -11 24 -14 -41 -28 -41 -9 -40 -9 18 -4 67 5 93 12 93 24 0 10 -37 20 -70 19 l-25 0 25 -11z" /> <path d="M2105 320 l-100 -6 90 -1 c50 0 117 3 150 7 l60 7 -50 0 c-27 -1 -95 -4 -150 -7z" /> <path d="M808 313 c17 -2 47 -2 65 0 17 2 3 4 -33 4 -36 0 -50 -2 -32 -4z" /> <path d="M1248 303 c45 -2 119 -2 165 0 45 1 8 3 -83 3 -91 0 -128 -2 -82 -3z" /> <path d="M1563 303 c37 -2 97 -2 135 0 37 2 6 3 -68 3 -74 0 -105 -1 -67 -3z" /> <path d="M1868 303 c17 -2 47 -2 65 0 17 2 3 4 -33 4 -36 0 -50 -2 -32 -4z" /> <path d="M877 153 c-3 -6 -1 -79 3 -103 0 -3 7 4 15 14 13 17 15 17 21 3 3 -10 13 -17 22 -17 13 0 12 3 -3 20 -14 16 -16 23 -7 32 20 20 14 33 -6 15 -25 -23 -30 -21 -25 7 5 23 -11 45 -20 29z" /> <path d="M1862 148 c-7 -7 -12 -31 -12 -55 0 -33 4 -43 16 -43 12 0 15 7 12 25 -3 14 -2 28 3 31 4 2 6 11 2 19 -3 8 0 15 7 15 6 0 8 5 5 10 -8 13 -18 13 -33 -2z" /> <path d="M2290 140 c0 -13 -7 -20 -19 -20 -23 0 -37 -35 -22 -54 6 -8 23 -13 36 -13 24 0 25 3 25 53 0 30 -4 54 -10 54 -5 0 -10 -9 -10 -20z" /> <path d="M670 100 c0 -27 5 -50 10 -50 6 0 10 6 10 14 0 8 9 18 20 21 24 8 27 50 4 59 -37 14 -44 7 -44 -44z" /> <path d="M1717 128 c-2 -7 -2 -28 0 -45 4 -24 11 -33 24 -33 21 0 26 16 7 23 -10 3 -10 9 -2 23 9 15 8 22 -2 32 -17 15 -21 15 -27 0z" /> <path d="M2079 123 c-1 -4 -2 -17 -3 -27 -2 -30 -26 -32 -26 -2 0 14 -5 26 -11 26 -6 0 -9 -14 -7 -32 3 -29 7 -33 36 -35 30 -1 32 1 32 32 0 29 -17 60 -21 38z" /> <path d="M773 104 c-15 -39 38 -67 60 -32 8 12 7 21 -2 32 -17 21 -50 20 -58 0z" /> <path d="M981 102 c-13 -25 8 -56 35 -50 29 5 27 62 -3 66 -13 2 -26 -4 -32 -16z" /> <path d="M1080 86 c0 -20 5 -36 10 -36 6 0 10 11 10 24 0 14 5 28 10 31 6 4 10 -7 10 -24 0 -37 17 -41 22 -6 4 31 23 33 23 3 0 -12 6 -23 13 -26 10 -3 13 5 10 29 -3 33 -4 34 -55 37 l-53 3 0 -35z" /> <path d="M1237 113 c-22 -21 0 -63 33 -63 18 0 32 40 19 56 -12 15 -41 19 -52 7z" /> <path d="M1330 85 c0 -25 4 -35 12 -33 7 3 13 11 14 19 2 35 5 40 14 34 6 -3 10 -17 10 -31 0 -13 5 -24 11 -24 6 0 9 14 7 33 -3 28 -7 32 -35 35 -32 3 -33 2 -33 -33z" /> <path d="M1500 86 c0 -42 17 -49 22 -8 4 32 23 32 23 0 0 -12 6 -23 13 -26 10 -3 13 5 10 29 -3 30 -7 34 -35 37 -32 3 -33 2 -33 -32z" /> <path d="M1607 101 c-7 -27 15 -54 39 -49 14 2 19 12 19 33 0 25 -4 31 -26 33 -19 2 -28 -2 -32 -17z" /> <path d="M1923 104 c-14 -38 38 -67 60 -33 15 24 1 49 -28 49 -15 0 -28 -7 -32 -16z" /> <path d="M2140 85 c0 -19 5 -35 10 -35 6 0 10 11 10 24 0 14 5 28 10 31 6 4 10 -7 10 -25 0 -21 4 -30 13 -28 6 3 12 10 11 16 -1 7 -2 21 -2 32 -2 15 -9 20 -32 20 -28 0 -30 -3 -30 -35z" /> </g> </svg>
                            <div className="flex flex-col items-center justify-center">
                                <p className="md:text-lg xl:text-xl text-gray-500 mt-4">Whoops, looks like that page does not exist!.</p>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}