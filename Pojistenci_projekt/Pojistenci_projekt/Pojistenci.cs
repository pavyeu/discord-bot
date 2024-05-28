using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pojistenci_projekt
{
    internal class Pojistenci
    {
        public string Jmeno { get; set; }
        public string Prijmeni { get; set; }
        public string RodneCislo { get; set; }
        public string TelefonniCislo { get; set; }

        /// <summary>
        /// Vytvoření pojištěnce
        /// </summary>
        /// <returns>Jméno Přijmení Rodné číslo a telefonní číslo</returns>
        public override string ToString()
        {
            return $"{Jmeno} {Prijmeni}, Rodné číslo: {RodneCislo}, Telefonní číslo: {TelefonniCislo}";
        }

    }
}
