function convert() {
      const v = parseFloat(document.getElementById("value").value);
        const t = document.getElementById("type").value;
          let r;

            if (isNaN(v)) {
                document.getElementById("result").innerText = "Please enter a number";
                    return;
                      }

                        switch (t) {
                            case "m-km": r = v / 1000; break;
                                case "km-m": r = v * 1000; break;
                                    case "g-kg": r = v / 1000; break;
                                        case "kg-g": r = v * 1000; break;
                                            case "cm-m": r = v / 100; break;
                                                case "m-cm": r = v * 100; break;
                                                    case "c-f": r = (v * 9/5) + 32; break;
                                                        case "f-c": r = (v - 32) * 5/9; break;
                                                          }

                                                            document.getElementById("result").innerText = "Result: " + r;
                                                            }
}