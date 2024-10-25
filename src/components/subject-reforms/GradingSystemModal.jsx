import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GradingSystemModal = ({ isOpen, onOpenChange, gradingType }) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{gradingType} Grading System</DialogTitle>
        <DialogDescription>
          {gradingType === 'GCSE' ? (
            <p>
              GCSEs are graded on a 9-1 scale, with 9 being the highest grade.
              Grade 4 is considered a 'standard pass' and grade 5 a 'strong pass'.
            </p>
          ) : (
            <p>
              A-levels are graded on an A*-E scale, with A* being the highest grade.
              Grades A*-E are passing grades, while U is unclassified (fail).
            </p>
          )}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default GradingSystemModal;