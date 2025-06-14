"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

// This is a placeholder for the questions you'll add manually
const placeholderQuestions = [
  "Rejected from Waterloo",
  "Eaten Mama's best hot dog in front of sidney smith",
  "Spent over 24 consecutive hours in a non residence building",
  "Started a fire in a non-residence building",
  "Had a midterm with a class average below 50%",
  "Had a crush on a lab or tutorial partner",
  "Had an encounter with campus security",
  "Been on the roof of an university building",
  "Commited an AO",
  "Got caught for an AO",
  "Been drunk in a non residence building",
  "Flirted with a TA or Professor",
  "Been flirted with by a TA or Professor",
  "Smoked a cigarette on campus property",
  "Stolen something from a dining hall",
  "Signed up for aphrodite",
  "Got ghosted on aphrodite",
  "Gone to the maddy",
  "Thrown up at the maddy",
  "Gone to a frat party",
  "Gone to Northrop Frye Mcdonald's",
  "Played 3D snake at Myhal",
  "Had a lecture in con hall",
  "3 or more consecutive days without showering",
  "Slept through an exam or midterm",
  "Lost your Tcard",
  "Took a free condom and didn't use it",
  "Pulled an all nighter",
  "Fell asleep in the front of a class",
  "Pulled two or more consecutive all nighters",
  "Got food poisoning from a dining hall",
  "Seen the anime wrapped car on campus",
  "Failed a course",
  "Lied about your GPA",
  "Been on Academic Probation",
  "Did a workstudy or a part time job on campus",
  "Masturbated in a non residence building",
  "Got a 19 year old friend to buy you alcohol",
  "Got drunk 3 or more nights in a row",
  "Talked shit about New College",
  "Flamed someone/been flamed for going to UTM or UTSC",
  "Flamed someone/been flamed for being in Rotman",
  "Been to Fresca Pizza and Pasta",
  "Ate a full meal in class",
  "Ordered late night food delivery to a non residence building",
  "Visited the Trinity College basements",
  "Used an absence declaration while healthy",
  "Got lost in University College",
  "Got rejected from your PoSt",
  "Dated someone in the same program as you",
  "Copied someone's assignment without them knowing",
  "Lied to a professor/TA",
  "Lived at the Chelsea hotel",
  "Dated a Waterloo student",
  "Picked up a tag from a CAMH poster",
  "Attended an event for the free food",
  "Dropped the same course multiple times",
  "Created a Startup",
  "4.0'd a course that you CR'd",
  "Had a TA the same age as your or younger than you",
  "Taken 7 or more courses in a semester",
  "Been denied from doing something by your registrar",
  "Had 3 or more exams scheduled within 24 hours",
  "Got a noise complaint about you",
  "Watched anything on a library study room TV",
  "Been called out by a professor or TA for being disruptive",
  "Swore in front of a professor or TA",
  "Kicked someone out of a study room",
  "Took an edible on campus",
  "Told someone to shut up in a library",
  "Been told to shut up in a library",
  "Damaged/vandalized/stole university property",
  "Had an exam in VLAD or KNOX",
  "Attended every lecture and/or tutorial and/or practical for a course",
  "Did all your course evaluations",
  "Attended no lectures for a course and still passed",
  "Cried yourself to sleep",
  "Had an argument over Piazza",
  "Got yelled at by a homeless person",
  "Wasted excess meal plan money at the end of the semester",
  "Saw a fox on campus",
  "Fell for a phishing email",
  "Got drunk at a school event",
  "Climbed on the Queen's park statue",
  "Made fun of/been made fun of for being an international student",
  "Called UofT the “Harvard of the North”/called Harvard the “UofT of the South”",
  "Made fun of someone at another Canadian university cuz Uoft best",
  "Regularly commutes over an hour to get to campus",
  "Set off a fire alarm on campus",
  "Hooked up in a residence building",
  "Hooked up in a non-residence building",
  "Had a condom malfunction mid hookup in an university building",
  "Chugged 3 or more energy drinks consecutively",
  "Had homeless person break into your residence building",
  "Had pregnancy scare in campus washroom",
  "Masturbated in your dorm/apartment wihout your roomate noticing",
  "Had 'anti-suicide' chairs in your residence building",
  "Hooked up with your TA",
  "Hooked up with a professor",
  "Had a threesome involving your TA and/or professor",
];

export default function PurityTest() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (index: number, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: checked,
    }));
  };

  const calculateScore = () => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    // Calculate score as a percentage of purity (100 - percentage of checked items)
    const calculatedScore = Math.round(
      100 - (checkedCount / placeholderQuestions.length) * 100
    );
    setScore(calculatedScore);
    setSubmitted(true);
  };

  const resetTest = () => {
    setCheckedItems({});
    setScore(null);
    setSubmitted(false);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {!submitted ? (
        <>
          <div className="space-y-4 mb-6">
            {placeholderQuestions.map((question, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 rounded hover:bg-gray-50"
              >
                <Checkbox
                  id={`question-${index}`}
                  checked={checkedItems[index] || false}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(index, checked as boolean)
                  }
                />
                <label
                  htmlFor={`question-${index}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {index + 1}. {question}
                </label>
              </div>
            ))}
          </div>
          <Button
            onClick={calculateScore}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Calculate My Score
          </Button>
        </>
      ) : (
        <Card className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Your UofT Purity Score</h2>
          <div className="text-6xl font-bold text-blue-600 mb-4">{score}</div>
          <Button onClick={resetTest} variant="outline" className="mt-2">
            Take the Test Again
          </Button>
        </Card>
      )}
    </div>
  );
}
