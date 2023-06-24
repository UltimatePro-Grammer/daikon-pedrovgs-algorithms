import daikon.*;
import java.io.*;

public class ReadDaikonInvariants {
    public static void main(String[] args) {
        PptMap pptMap = null;
        try {
            pptMap = FileIO.read_serialized_pptmap(new File(args[0]), true);
        } catch (Throwable e) {
            System.err.println("Error reading serialized pptmap");
            e.printStackTrace();
            System.exit(1);
        }

        assert pptMap != null;

        System.out.println("There are " + pptMap.size() + " top-level program points");
    }
}
