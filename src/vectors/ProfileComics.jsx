import React from "react"

const ProfileComics = (props) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 800 1300"
    {...props}
  >
    <defs>
      <filter
        id="skin-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feOffset dx="-25" dy="-5" result="offsetblur" />
        <feFlood floodColor="#d7a787" result="color" />
        <feComposite in2="offsetblur" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>
      <filter
        id="hair-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feComponentTransfer in="SourceAlpha">
          <fe type="table" tableValues="1 0" />
          <feFuncA />
        </feComponentTransfer>
        <feOffset dx="-37" dy="0" result="offsetlight" />
        <feMorphology
          in="offsetlight"
          radius="10"
          result="offsetmask"
        ></feMorphology>
        <feFlood floodColor="#180000" result="color" />
        <feComposite in2="offsetmask" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>
      <filter
        id="hat-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feOffset dx="-37" dy="0" result="offsetlight" />
        <feMorphology
          in="offsetlight"
          radius="10"
          result="offsetmask"
        ></feMorphology>
        <feFlood floodColor="#e10000" result="color" />
        <feComposite in2="offsetmask" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>
      <filter
        id="clothe-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0"></feFuncA>
        </feComponentTransfer>
        <feOffset dx="-25" dy="-5" result="offsetblur" />
        <feFlood floodColor="#5e1b23" result="color" />
        <feComposite in2="offsetblur" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>
      <filter
        id="tongue-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0"></feFuncA>
        </feComponentTransfer>
        <feOffset dx="-15" dy="-5" result="offsetblur"></feOffset>
        <feFlood floodColor="#e34f4f" result="color"></feFlood>
        <feComposite in2="offsetblur" operator="in"></feComposite>
        <feComposite in2="SourceAlpha" operator="in"></feComposite>
        <feMerge>
          <feMergeNode in="SourceGraphic"></feMergeNode>
          <feMergeNode></feMergeNode>
        </feMerge>
      </filter>
      <mask id="mask-hat-12ee431c-8604-4d7b-bbee-ee7b1c3595f1">
        <rect x="-200" y="-190" width="800" height="760" fill="#fff"></rect>
      </mask>
    </defs>
    <g transform="translate(0, 0)">
      <g transform="translate(440, 1000) rotate(0)">
        <g>
          <path
            d="m 56.706253,116.55463 c 10.96747245,-25.450573500000004 16.756487550000003,-55.98806400000001 18.262534950000003,-79.49576250000001 1.50860655,-26.54994375 -7.293171600000001,-75.31143345000001 -16.113878550000003,-92.50990155000001 -3.7874133,-8.132355 -8.19080955,-14.506564050000001 -16.983435150000002,-22.006809 -9.9967923,-7.802843400000001 -33.26295555,-8.4207519 -42.49040400000001,-5.4356049 -10.658315250000001,3.03756255 -22.641022800000002,11.039940450000001 -27.141241050000005,22.432627800000002 -9.057346650000001,22.658001300000002 4.42357245,59.444802450000005 7.307397900000001,92.06430255000001 4.9342045500000005,39.5075736 -6.108072300000001,69.5932281 -20.325947399999997,102.8076291 -6.924089700000001,14.111064 -10.581466500000001,31.490910000000003 -7.65415035,45.818685 11.285861400000002,33.8192415 34.767107100000004,31.361022000000002 65.680956,33.5377845 14.174730900000002,-0.18562499999999998 22.236043500000005,0.877239 36.612873,-0.16533 31.795909200000004,-3.546873 54.02150325,-28.874934 53.968171950000006,-57.330108 -3.2971603500000004,-46.097073 -57.2282568,-49.76027100000001 -85.93842510000002,-24.9905205"
            style={{
              fill: "#e6b697",
              fillOpacity: "1",
              filter: "url(#skin-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
            }}
          />
          <path
            d="m 56.706253,116.55463 c 10.96747245,-25.450573500000004 16.756487550000003,-55.98806400000001 18.262534950000003,-79.49576250000001 1.50860655,-26.54994375 -7.293171600000001,-75.31143345000001 -16.113878550000003,-92.50990155000001 -3.7874133,-8.132355 -8.19080955,-14.506564050000001 -16.983435150000002,-22.006809 -9.9967923,-7.802843400000001 -33.26295555,-8.4207519 -42.49040400000001,-5.4356049 -10.658315250000001,3.03756255 -22.641022800000002,11.039940450000001 -27.141241050000005,22.432627800000002 -9.057346650000001,22.658001300000002 4.42357245,59.444802450000005 7.307397900000001,92.06430255000001 4.9342045500000005,39.5075736 -6.108072300000001,69.5932281 -20.325947399999997,102.8076291 -6.924089700000001,14.111064 -10.581466500000001,31.490910000000003 -7.65415035,45.818685 11.285861400000002,33.8192415 34.767107100000004,31.361022000000002 65.680956,33.5377845 14.174730900000002,-0.18562499999999998 22.236043500000005,0.877239 36.612873,-0.16533 31.795909200000004,-3.546873 54.02150325,-28.874934 53.968171950000006,-57.330108 -3.2971603500000004,-46.097073 -57.2282568,-49.76027100000001 -85.93842510000002,-24.9905205"
            style={{ fillOpacity: "0", stroke: "black", strokeWidth: "0.5rem" }}
          />
          <path
            style={{ fill: "#363434", stroke: "black", strokeWidth: "0.5rem" }}
            d="m 56.706253,116.55463 c 10.96747245,-25.450573500000004 16.756487550000003,-55.98806400000001 18.262534950000003,-79.49576250000001 1.50860655,-26.54994375 -7.293171600000001,-75.31143345000001 -16.113878550000003,-92.50990155000001 -3.7874133,-8.132355 -8.19080955,-14.506564050000001 -16.983435150000002,-22.006809 -9.9967923,-7.802843400000001 -33.26295555,-8.4207519 -42.49040400000001,-5.4356049 -10.658315250000001,3.03756255 -22.641022800000002,11.039940450000001 -27.141241050000005,22.432627800000002 -9.057346650000001,22.658001300000002 4.42357245,59.444802450000005 7.307397900000001,92.06430255000001 4.9342045500000005,39.5075736 -6.108072300000001,69.5932281 -20.325947399999997,102.8076291 -6.924089700000001,14.111064 -10.581466500000001,31.490910000000003 -7.65415035,45.818685 11.285861400000002,33.8192415 34.767107100000004,31.361022000000002 65.680956,33.5377845 14.174730900000002,-0.18562499999999998 22.236043500000005,0.877239 36.612873,-0.16533 31.795909200000004,-3.546873 54.02150325,-28.874934 53.968171950000006,-57.330108 -3.2971603500000004,-46.097073 -57.2282568,-49.76027100000001 -85.93842510000002,-24.9905205"
          />
        </g>
      </g>
      <g transform="translate(445, 680) rotate(0)">
        <g>
          <path
            d="m 61.183538,194.0572 c 6.487432,12.59572 7.13192,29.4936 2.53272,39.09232 -15.685632,27.09068 -54.323808,40.88672 -83.460496,23.83044 -46.931388,-37.29136 -53.135904,-89.02076 -53.992848,-142.38128 1.784088,-45.23572 21.083604,-101.79228 50.810984,-136.34564 11.717652,-13.28572 25.223268,-26.14916 42.443088,-26.21724 17.229588,1.56376 27.675048,10.97296 32.46734,24.49796 5.733696,31.38728 -20.490976,65.13288 -36.933856,95.6722 -12.869136,25.50988 -31.350052,57.59744 -13.906172,76.68084"
            style={{
              fill: "#e6b697",
              filter: " url(#skin-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
            }}
          ></path>
          <path
            d="m 61.183538,194.0572 c 6.487432,12.59572 7.13192,29.4936 2.53272,39.09232 -15.685632,27.09068 -54.323808,40.88672 -83.460496,23.83044 -46.931388,-37.29136 -53.135904,-89.02076 -53.992848,-142.38128 1.784088,-45.23572 21.083604,-101.79228 50.810984,-136.34564 11.717652,-13.28572 25.223268,-26.14916 42.443088,-26.21724 17.229588,1.56376 27.675048,10.97296 32.46734,24.49796 5.733696,31.38728 -20.490976,65.13288 -36.933856,95.6722 -12.869136,25.50988 -31.350052,57.59744 -13.906172,76.68084"
            style={{ fillOpacity: 0, stroke: "black", strokeWidth: "0.5rem" }}
          ></path>
        </g>
        <g>
          <path
            d="m -1,149 c 9.869396,-4.8544 22.883636,-7.86016 32.332936,-6.2924 12.151224,2.70064 19.409588,11.23404 28.934712,17.83224 11.763196,9.4328 9.758272,19.73388 2.523788,29.19452 -7.519964,8.89816 -17.968408,11.7368 -28.188172,9.13532 -9.269656,-2.72504 -11.770316,-5.54904 -17.097508,-12.24388"
            style={{ fill: "#e6b697", filter: "none" }}
          />
          <path
            d="m -1,149 c 9.869396,-4.8544 22.883636,-7.86016 32.332936,-6.2924 12.151224,2.70064 19.409588,11.23404 28.934712,17.83224 11.763196,9.4328 9.758272,19.73388 2.523788,29.19452 -7.519964,8.89816 -17.968408,11.7368 -28.188172,9.13532 -9.269656,-2.72504 -11.770316,-5.54904 -17.097508,-12.24388"
            style={{ fillOpacity: "0", stroke: "black", strokeWidth: "0.5rem" }}
          />
        </g>
        <g>
          <path
            style={{
              fill: "#722F37",
              filter:
                "url(#clothe-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
            }}
            transform="translate(-68, -50)"
            d="M 35.282809,29.212307 C 21.199609,43.352917 2.7709989,89.940567 0.72660893,94.102387 L 92.914599,115.42522 c 3.98713,-6.75834 32.447691,-53.341433 32.877001,-78.883013 -9.59367,-52.96945 -64.117431,-40.6275597 -90.508791,-7.3299 z"
          />
          <path
            style={{ fillOpacity: "0", stroke: "black", strokeWidth: "0.5rem" }}
            transform="translate(-68, -50)"
            d="M 35.282809,29.212307 C 21.199609,43.352917 2.7709989,89.940567 0.72660893,94.102387 L 92.914599,115.42522 c 3.98713,-6.75834 32.447691,-53.341433 32.877001,-78.883013 -9.59367,-52.96945 -64.117431,-40.6275597 -90.508791,-7.3299 z"
          />
        </g>
      </g>
      <g className="headandhair">
        <g transform="translate(400, 380) rotate(0 400 380)">
          <g>
            <path
              d="m -200 0 a 100 100 0 0 0 400 0 a 100 100 0 0 0 -400 0"
              style={{
                fill: "#e6b697",
                fillOpacity: "1",
                filter:
                  "url(#skin-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
              }}
            />
            <g transform="translate(-400, -380) rotate(0 -400 -380)"></g>
            <path
              d="m -200 0 a 100 100 0 0 0 400 0 a 100 100 0 0 0 -400 0"
              style={{
                fillOpacity: "0",
                stroke: "black",
                strokeWidth: "0.5rem",
              }}
            />
          </g>
          <g transform="translate(40, 25)">
            <g transform="translate(-55, 0)">
              <g
                transformorigin="0px 0px"
                style={{ transform: "none", transformorigin: "0px 0px" }}
              >
                <ellipse
                  cx="0"
                  cy="0"
                  rx="20"
                  ry="32"
                  style={{ fill: "#000000" }}
                  className="eye"
                />
                <circle cx="-10" cy="-16" r="8" style={{ fill: "white" }} />
              </g>
              <path
                d="m 24 -40 a 7 -2 0 0 0 -55 0 a 7 1 0 0 0 55 0"
                style={{ fill: "#360606" }}
                transform="translate(0, 0) rotate(6 24 -40)"
              ></path>
            </g>
            <g transform="translate(55, 0)">
              <g
                transformorigin="0px 0px"
                style={{ transform: "none", transformorigin: "0px 0px" }}
              >
                <ellipse
                  cx="0"
                  cy="0"
                  rx="20"
                  ry="32"
                  style={{ fill: "#000000" }}
                  className="eye"
                />
                <circle cx="-10" cy="-16" r="8" style={{ fill: "white" }} />
              </g>
              <path
                d="m -24 -40 a 7 1 0 0 0 55 0 a 7 -2 0 0 0 -55 0"
                style={{ fill: "#360606" }}
                transform="translate(0, 0) rotate(-6 -24 -40) "
              />
            </g>
            <path
              style={{
                fillOpacity: "0",
                stroke: "#000000c0",
                strokeWidth: "12px",
              }}
              d="m 3.8649112,11.296016 c -5.10919,4.79221 14.9711698,41.40228 22.7539098,42.88672 6.34941,2.20596 44.39589,3.8766 51.26757,-1.61328 3.54529,-2.11903 16.91891,-22.68125 19.27344,-35.9707 l 18.183599,0.3496 c 1.93194,13.24654 15.76596,34.61314 19.3789,36.7754 6.86283,5.48988 44.85994,3.81924 51.20117,1.61328 7.77272,-1.48444 27.82722,-38.09451 22.72461,-42.88672 -5.27739,-7.8133298 -79.06587,-9.5005298 -89.16211,-5.5839898 -2.66838,0.81557 -3.97071,2.87418 -4.29492,5.6992198 l -17.699219,-0.27929 c 0.13173,-3.1833098 -1.41346,-5.6779698 -4.34961,-6.5742198 -21.03356,-1.88942 -70.38272,-7.09938 -89.2773398,5.5839798 z"
              transform="translate(-105, -28)"
            />
          </g>
          <g transform="translate(45, 90)">
            <clipPath id="tongue-12ee431c-8604-4d7b-bbee-ee7b1c3595f1">
              <circle cx="-60" cy="90" r="120"></circle>
            </clipPath>
            <path
              style={{ fill: "#360606a0" }}
              d="m229.92 483.88 0.43448-29.31c96.356 90.69 155.91 98.142 151.55 89.117-41.134-76.555-43.862-102.01 71.159-103.14 97.15-3.5485 70.575 38.622 47.117 85.789-7.9256 12.947 30.341-9.1565 81.368-62.434-96.38 184.5-303.2 120.2-351.63 19.976z"
              transform="translate(-446, -469)"
            />
            <g
              transformorigin="0px 24px"
              style={{ transform: "none", transformorigin: "0px 24px" }}
            >
              <path
                id="mouth-12ee431c-8604-4d7b-bbee-ee7b1c3595f1"
                d="M -60 0 a 5 5 0 0 0 120 0 a 5 1 0 0 0 -120 0 Z"
              />
              <path
                d="M -6 0 0 a 5 5 0 0 0 120 0 a 5 1 0 0 0 -120 0 Z"
                style={{
                  fillOpacity: "0",
                  stroke: "black",
                  strokeWidth: "0.5rem",
                }}
              />
              <use
                clipPath="url(#tongue-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)"
                xlinkHref="#mouth-12ee431c-8604-4d7b-bbee-ee7b1c3595f1"
                style={{
                  fill: "#eb7f7f",
                  filter:
                    "url(#tongue-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
                }}
              ></use>
            </g>
          </g>
        </g>
      </g>
      <g transform="translate(400, 875) rotate(0 400 875)">
        <g>
          <path
            d="m -125 0 a 62.5 75 0 0 0 250 0 a 62.5 135 0 0 0 -250 0"
            style={{
              fill: "#e6b697",
              fillOpacity: "1",
              filter: "url(#skin-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
            }}
          />
          <path
            d="m -125 0 a 62.5 75 0 0 0 250 0 a 62.5 135 0 0 0 -250 0"
            style={{ fillOpacity: "0", stroke: "black", strokeWidth: "0.5rem" }}
          />
        </g>
        <g className="body">
          <path
            d="m -125 0 a 62.5 75 0 0 0 250 0 a 62.5 135 0 0 0 -250 0"
            style={{
              fill: "#722F37",
              fillOpacity: "1",
              filter:
                "url(#clothe-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
            }}
          />
          <path
            d="m -125 0 a 62.5 75 0 0 0 250 0 a 62.5 135 0 0 0 -250 0"
            style={{ fillOpacity: "0", stroke: "black", strokeWidth: "0.5rem" }}
          />
        </g>
        <path
          d="M -120.9914351,39.637572399999996 C -52.038196,66.742869 82.78013999999999,69.281105 121.23955000000001,37.8720204 107.78141,96.16704 75.0897,154.22377 5.58014,157.23107 -79.964962,155.78217 -111.951255,85.291668 -120.9914351,39.637572399999996 Z"
          style={{ fill: "#363434", stroke: "black", strokeWidth: "0.5rem" }}
        />
      </g>
      <g transform="translate(340, 1000) rotate(0)">
        <g>
          <path
            d="m 56.706253,116.55463 c 10.96747245,-25.450573500000004 16.756487550000003,-55.98806400000001 18.262534950000003,-79.49576250000001 1.50860655,-26.54994375 -7.293171600000001,-75.31143345000001 -16.113878550000003,-92.50990155000001 -3.7874133,-8.132355 -8.19080955,-14.506564050000001 -16.983435150000002,-22.006809 -9.9967923,-7.802843400000001 -33.26295555,-8.4207519 -42.49040400000001,-5.4356049 -10.658315250000001,3.03756255 -22.641022800000002,11.039940450000001 -27.141241050000005,22.432627800000002 -9.057346650000001,22.658001300000002 4.42357245,59.444802450000005 7.307397900000001,92.06430255000001 4.9342045500000005,39.5075736 -6.108072300000001,69.5932281 -20.325947399999997,102.8076291 -6.924089700000001,14.111064 -10.581466500000001,31.490910000000003 -7.65415035,45.818685 11.285861400000002,33.8192415 34.767107100000004,31.361022000000002 65.680956,33.5377845 14.174730900000002,-0.18562499999999998 22.236043500000005,0.877239 36.612873,-0.16533 31.795909200000004,-3.546873 54.02150325,-28.874934 53.968171950000006,-57.330108 -3.2971603500000004,-46.097073 -57.2282568,-49.76027100000001 -85.93842510000002,-24.9905205"
            style={{
              fill: "#e6b697",
              fillOpacity: "1",
              filter: "url(#skin-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
            }}
          />
          <path
            d="m 56.706253,116.55463 c 10.96747245,-25.450573500000004 16.756487550000003,-55.98806400000001 18.262534950000003,-79.49576250000001 1.50860655,-26.54994375 -7.293171600000001,-75.31143345000001 -16.113878550000003,-92.50990155000001 -3.7874133,-8.132355 -8.19080955,-14.506564050000001 -16.983435150000002,-22.006809 -9.9967923,-7.802843400000001 -33.26295555,-8.4207519 -42.49040400000001,-5.4356049 -10.658315250000001,3.03756255 -22.641022800000002,11.039940450000001 -27.141241050000005,22.432627800000002 -9.057346650000001,22.658001300000002 4.42357245,59.444802450000005 7.307397900000001,92.06430255000001 4.9342045500000005,39.5075736 -6.108072300000001,69.5932281 -20.325947399999997,102.8076291 -6.924089700000001,14.111064 -10.581466500000001,31.490910000000003 -7.65415035,45.818685 11.285861400000002,33.8192415 34.767107100000004,31.361022000000002 65.680956,33.5377845 14.174730900000002,-0.18562499999999998 22.236043500000005,0.877239 36.612873,-0.16533 31.795909200000004,-3.546873 54.02150325,-28.874934 53.968171950000006,-57.330108 -3.2971603500000004,-46.097073 -57.2282568,-49.76027100000001 -85.93842510000002,-24.9905205"
            style={{ fillOpacity: "0", stroke: "black", strokeWidth: "0.5rem" }}
          />
          <path
            style={{ fill: "#363434", stroke: "black", strokeWidth: "0.5rem" }}
            d="m 56.706253,116.55463 c 10.96747245,-25.450573500000004 16.756487550000003,-55.98806400000001 18.262534950000003,-79.49576250000001 1.50860655,-26.54994375 -7.293171600000001,-75.31143345000001 -16.113878550000003,-92.50990155000001 -3.7874133,-8.132355 -8.19080955,-14.506564050000001 -16.983435150000002,-22.006809 -9.9967923,-7.802843400000001 -33.26295555,-8.4207519 -42.49040400000001,-5.4356049 -10.658315250000001,3.03756255 -22.641022800000002,11.039940450000001 -27.141241050000005,22.432627800000002 -9.057346650000001,22.658001300000002 4.42357245,59.444802450000005 7.307397900000001,92.06430255000001 4.9342045500000005,39.5075736 -6.108072300000001,69.5932281 -20.325947399999997,102.8076291 -6.924089700000001,14.111064 -10.581466500000001,31.490910000000003 -7.65415035,45.818685 11.285861400000002,33.8192415 34.767107100000004,31.361022000000002 65.680956,33.5377845 14.174730900000002,-0.18562499999999998 22.236043500000005,0.877239 36.612873,-0.16533 31.795909200000004,-3.546873 54.02150325,-28.874934 53.968171950000006,-57.330108 -3.2971603500000004,-46.097073 -57.2282568,-49.76027100000001 -85.93842510000002,-24.9905205"
          />
        </g>
      </g>
      <g transform="translate(320, 680) rotate(0)">
        <g>
          <path
            d="m 61.183538,194.0572 c 6.487432,12.59572 7.13192,29.4936 2.53272,39.09232 -15.685632,27.09068 -54.323808,40.88672 -83.460496,23.83044 -46.931388,-37.29136 -53.135904,-89.02076 -53.992848,-142.38128 1.784088,-45.23572 21.083604,-101.79228 50.810984,-136.34564 11.717652,-13.28572 25.223268,-26.14916 42.443088,-26.21724 17.229588,1.56376 27.675048,10.97296 32.46734,24.49796 5.733696,31.38728 -20.490976,65.13288 -36.933856,95.6722 -12.869136,25.50988 -31.350052,57.59744 -13.906172,76.68084"
            style={{
              fill: "#e6b697",
              filter: "url(#skin-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
            }}
          />
          <path
            d="m 61.183538,194.0572 c 6.487432,12.59572 7.13192,29.4936 2.53272,39.09232 -15.685632,27.09068 -54.323808,40.88672 -83.460496,23.83044 -46.931388,-37.29136 -53.135904,-89.02076 -53.992848,-142.38128 1.784088,-45.23572 21.083604,-101.79228 50.810984,-136.34564 11.717652,-13.28572 25.223268,-26.14916 42.443088,-26.21724 17.229588,1.56376 27.675048,10.97296 32.46734,24.49796 5.733696,31.38728 -20.490976,65.13288 -36.933856,95.6722 -12.869136,25.50988 -31.350052,57.59744 -13.906172,76.68084"
            style={{ fillOpacity: "0", stroke: "black", strokeWidth: "0.5rem" }}
          />
        </g>
        <g>
          <path
            d="m -1,149 c 9.869396,-4.8544 22.883636,-7.86016 32.332936,-6.2924 12.151224,2.70064 19.409588,11.23404 28.934712,17.83224 11.763196,9.4328 9.758272,19.73388 2.523788,29.19452 -7.519964,8.89816 -17.968408,11.7368 -28.188172,9.13532 -9.269656,-2.72504 -11.770316,-5.54904 -17.097508,-12.24388"
            style={{ fill: "#e6b697", filter: "none" }}
          />
          <path
            d="m -1,149 c 9.869396,-4.8544 22.883636,-7.86016 32.332936,-6.2924 12.151224,2.70064 19.409588,11.23404 28.934712,17.83224 11.763196,9.4328 9.758272,19.73388 2.523788,29.19452 -7.519964,8.89816 -17.968408,11.7368 -28.188172,9.13532 -9.269656,-2.72504 -11.770316,-5.54904 -17.097508,-12.24388"
            style={{ fillOpacity: "0", stroke: "black", strokeWidth: "0.5rem" }}
          />
        </g>
        <g>
          <path
            style={{
              fill: "#722F37",
              filter:
                "url(#clothe-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
            }}
            transform="translate(-68, -50)"
            d="M 35.282809,29.212307 C 21.199609,43.352917 2.7709989,89.940567 0.72660893,94.102387 L 92.914599,115.42522 c 3.98713,-6.75834 32.447691,-53.341433 32.877001,-78.883013 -9.59367,-52.96945 -64.117431,-40.6275597 -90.508791,-7.3299 z"
          />
          <path
            style={{ fillOpacity: "0", stroke: "black", strokeWidth: "0.5rem" }}
            transform="translate(-68, -50)"
            d="M 35.282809,29.212307 C 21.199609,43.352917 2.7709989,89.940567 0.72660893,94.102387 L 92.914599,115.42522 c 3.98713,-6.75834 32.447691,-53.341433 32.877001,-78.883013 -9.59367,-52.96945 -64.117431,-40.6275597 -90.508791,-7.3299 z"
          />
        </g>
      </g>
      <g className="headandhair">
        <g transform="translate(400, 380) rotate(0 400 380)">
          <path
            d="m 234.91901,473.8788 c -0.0668,-67.88776 4.55992,-74.84624 30.17996,-109.49742 9.37419,-7.2946 36.85843,-7.46477 58.96316,3.64336 -0.66001,-17.37806 -2.49569,-26.92424 -10.84771,-36.80815 22.39632,5.05369 41.5625,12.50111 53.7013,25.64766 8.11046,-19.5948 -4.16725,-31.79848 -10.64138,-37.80743 58.73965,3.26399 85.72911,9.44947 134.08537,28.17673 -10.55918,-19.05101 -15.24348,-28.2135 -35.15425,-44.9674 51.41943,2.24517 95.55193,15.20393 148.22216,49.3913 0.0315,-27.56466 -5.11795,-39.55484 -18.38721,-51.40475 28.41799,-0.64694 33.42466,-1.89638 62.74295,12.30711 -2.86902,-54.24268 -63.09804,-87.41103 -82.53221,-94.79942 19.64633,-10.23144 44.10458,-17.08649 73.68367,-10.7867 -9.44282,-48.62074 -127.24515,-65.03225 -177.43995,-70.98748 -2.15918,-13.21225 40.03298,-11.49936 54.33883,-11.49936 -31.77838,-11.47794 -97.40476,-18.86002 -129.15408,-4.65843 -25.66182,-13.25558 -8.6026,-13.49864 -16.47922,3.9717 -4.34465,-3.61931 -6.76203,-7.74627 -11.96781,-11.75822 3.22429,6.91053 -0.30766,15.70976 -1.28036,17.02415 -30.02939,10.49831 -81.97701,26.77674 -101.36979,48.43969 -1.70732,-7.2488 -12.12478,-10.91396 -19.05946,-12.36353 1.288,3.71715 5.27154,13.34084 2.26429,16.6346 -3.76194,-3.80766 -13.75456,-6.16565 -22.06815,-1.72851 12.27779,4.48551 18.00016,7.97272 16.3801,15.74629 -90.07458,61.07259 -76.32948,228.18051 1.81979,278.08421 z"
            style={{
              fill: "#360606",
              filter: "url(#hair-shadow-12ee431c-8604-4d7b-bbee-ee7b1c3595f1)",
            }}
            transform="translate(-405, -370)"
          />
          <path
            d="m 234.91901,473.8788 c -0.0668,-67.88776 4.55992,-74.84624 30.17996,-109.49742 9.37419,-7.2946 36.85843,-7.46477 58.96316,3.64336 -0.66001,-17.37806 -2.49569,-26.92424 -10.84771,-36.80815 22.39632,5.05369 41.5625,12.50111 53.7013,25.64766 8.11046,-19.5948 -4.16725,-31.79848 -10.64138,-37.80743 58.73965,3.26399 85.72911,9.44947 134.08537,28.17673 -10.55918,-19.05101 -15.24348,-28.2135 -35.15425,-44.9674 51.41943,2.24517 95.55193,15.20393 148.22216,49.3913 0.0315,-27.56466 -5.11795,-39.55484 -18.38721,-51.40475 28.41799,-0.64694 33.42466,-1.89638 62.74295,12.30711 -2.86902,-54.24268 -63.09804,-87.41103 -82.53221,-94.79942 19.64633,-10.23144 44.10458,-17.08649 73.68367,-10.7867 -9.44282,-48.62074 -127.24515,-65.03225 -177.43995,-70.98748 -2.15918,-13.21225 40.03298,-11.49936 54.33883,-11.49936 -31.77838,-11.47794 -97.40476,-18.86002 -129.15408,-4.65843 -25.66182,-13.25558 -8.6026,-13.49864 -16.47922,3.9717 -4.34465,-3.61931 -6.76203,-7.74627 -11.96781,-11.75822 3.22429,6.91053 -0.30766,15.70976 -1.28036,17.02415 -30.02939,10.49831 -81.97701,26.77674 -101.36979,48.43969 -1.70732,-7.2488 -12.12478,-10.91396 -19.05946,-12.36353 1.288,3.71715 5.27154,13.34084 2.26429,16.6346 -3.76194,-3.80766 -13.75456,-6.16565 -22.06815,-1.72851 12.27779,4.48551 18.00016,7.97272 16.3801,15.74629 -90.07458,61.07259 -76.32948,228.18051 1.81979,278.08421 z"
            style={{ fillOpacity: "0", stroke: "black", strokeWidth: "0.5rem" }}
            transform="translate(-405, -370)"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default ProfileComics
