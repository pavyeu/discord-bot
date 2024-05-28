using Pojistenci_projekt;
using System.Xml;

internal class Program
{
    static List<Pojistenci> pojistenci = new List<Pojistenci>();

    static void Main(string[] args)
    {
        while (true)
        {
            Console.WriteLine("----------\nPojištěnci\n----------");
            Console.WriteLine("Prosím vyberte jednu možnost: ");
            Console.WriteLine("1. Přidat pojištěnce");
            Console.WriteLine("2. Zobrazit všechny pojištěnce");
            Console.WriteLine("3. Vyhledat pojištěnce");
            Console.WriteLine("4. Ukončit program");

            string volba = Console.ReadLine();

           switch (volba)
            {
                case "1":
                    PridatPojistence();
                        break;
                case "2":
                    ZobrazitPojistence();
                        break;
                case "3":
                    VyhedatPojistence();
                    break;
                case "4":
                    return;
                default:
                    Console.WriteLine("Neplatná volba, vyberte prosím správnou možnost");
                break;


            }
        }
    }

    /// <summary>
    /// Přidání pojištěnce do listu
    /// </summary>
    static void PridatPojistence()
    {
        Pojistenci NovyPojistenec = new Pojistenci();

        Console.Write("Zadejte jméno: ");
        NovyPojistenec.Jmeno = Console.ReadLine();
        
        if (!ValidaceJmena(NovyPojistenec.Jmeno))
        {
            return;
        }

        Console.Write("Zadejte příjmení: ");
        NovyPojistenec.Prijmeni = Console.ReadLine();

        if (!ValidaceJmena(NovyPojistenec.Prijmeni))
        {
            return;
        }

        Console.Write("Zadejte rodné číslo: ");
        NovyPojistenec.RodneCislo = Console.ReadLine();

        Console.Write("Zadejte telefonní číslo: ");
        NovyPojistenec.TelefonniCislo = Console.ReadLine();

        pojistenci.Add(NovyPojistenec);

        Console.WriteLine("Pojištěnec byl úspěšně přidán!");
    }

    /// <summary>
    /// Výpis pojištěnců
    /// </summary>
    static void ZobrazitPojistence()
    {
        if(pojistenci.Count == 0)
        {
            Console.WriteLine("Není zapsaný žádný pojištěnec!");
        }
        else
        {
            Console.WriteLine("Seznam pojištěnců: ");
            foreach(Pojistenci pojistenci in pojistenci)
            {
                Console.WriteLine(pojistenci);
            }
        }
    }
   
    /// <summary>
    /// Vyhledání pojištěnce pomocí příjmení
    /// </summary>
    static void VyhedatPojistence()
    {
        Console.Write("Zadejte prosím příjmení pojištěnce: ");
        string prijmeni = Console.ReadLine();
        
        Pojistenci pojistenec = pojistenci.Find(p => p.Prijmeni == prijmeni);

        if (pojistenec == null)
        {
            Console.WriteLine("Pojištěnec s tímto příjmením nebyl nalezen");
        }
        else
        {
            Console.WriteLine("Nalezený pojištěnec: ");
            Console.WriteLine(pojistenec);
        }
    }
    /// <summary>
    /// Funkce na validaci jména
    /// </summary>
    /// <param name="jmeno"></param>
    /// <returns>true/false</returns>
    static bool ValidaceJmena(string jmeno)
    {
        if (string.IsNullOrEmpty(jmeno))
        {
            Console.WriteLine("Jméno nesmí být prázdné!");
            return false;
        }
            foreach (char pismeno in jmeno)
        {
            if (!char.IsLetter(pismeno))
            {
                Console.WriteLine("Jméno nesmí obsahovat číslice!");
                return false;
            }
        }


            return true;
    }
}
