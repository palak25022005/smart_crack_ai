import Student from "../models/students_db.js";
import JEEExam from "../models/jee_exam.js"
import NEETExam from "../models/neet_exam.js"

// Assign syllabus based on student exam type
async function assignExamSyllabus(studentId) {
  try {
    const student = await Student.findById(studentId);
    if (!student) return console.log("Student not found.");

    if (student.exam === "JEE") {
      const newJEEData = new JEEExam({
        studentId,
        standards: [
          {
            level: "11th",
            subjects: [
              {
                name: "Physics",
                chapters: [{ name: "Physics and Measurement", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                   subtopics: [
                  { "name": "Physics, Technology, and Society" },
                  { "name": "SI Units" },
                  { "name": "Fundamental and Derived Units" },
                  { "name": "Least Count" },
                  { "name": "Accuracy and Precision of Measuring Instruments" },
                  { "name": "Errors in Measurement" },
                  { "name": "Dimensions of Physical Quantities" },
                  { "name": "Dimensional Analysis and Its Applications" }
                ] },
                { name: "Kinematics", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopics: [
                  { "name": "Motion in 1D" },
                  { "name": "The Frame of Reference" },
                  { "name": "Motion in a Straight Line" },
                  { "name": "Position-Time Graph" },
                  { "name": "Speed and Velocity" },
                  { "name": "Uniform and Non-Uniform Motion" },
                  { "name": "Average Speed and Instantaneous Velocity" },
                  { "name": "Uniformly Accelerated Motion" },
                  { "name": "Velocity-Time Graph" },
                  { "name": "Position-Time Graph" },
                  { "name": "Relations for Uniformly Accelerated Motion" },
                  { "name": "Scalars and Vectors" },
                  { "name": "Vector Addition and Subtraction" },
                  { "name": "Zero Vector" },
                  { "name": "Scalar and Vector Products" },
                  { "name": "Unit Vector" },
                  { "name": "Resolution of a Vector" },
                  { "name": "Relative Velocity" },
                  { "name": "Motion in a Plane" },
                  { "name": "Projectile Motion" },
                  { "name": "Uniform Circular Motion" }
                ]
                 },

                 { name: "Laws of Motion", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopics: [
                  { "name": "Force and Inertia" },
                  { "name": "Newtons First Law of Motion" },
                  { "name": "Momentum" },
                  { "name": "Newtons Second Law of Motion" },
                  { "name": "Impulses" },
                  { "name": "Newtons Third Law of Motion" },
                  { "name": "Law of Conservation of Linear Momentum and Its Applications" },
                  { "name": "Equilibrium of Concurrent Forces" },
                  { "name": "Static and Kinetic Friction" },
                  { "name": "Laws of Friction" },
                  { "name": "Rolling Friction" },
                  { "name": "Dynamics of Uniform Circular Motion" },
                  { "name": "Centripetal Force and Its Applications" }
                ]                
                 },

                 { name: "Work, Energy and Power", completed: false,
                  
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopics: [
                  { "name": "Work Done by a Constant Force and a Variable Force" },
                  { "name": "Kinetic and Potential Energies" },
                  { "name": "Work-Energy Theorem" },
                  { "name": "Power" },
                  { "name": "The Potential Energy of a Spring" },
                  { "name": "Conservation of Mechanical Energy" },
                  { "name": "Conservative and Non-Conservative Forces" },
                  { "name": "Elastic and Inelastic Collisions in One and Two Dimensions" }
                ]
                }
              ],
              },
              { name: "Mathematics", 
              chapters: [{ name: "Sets & Relations", completed: false,
                weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                subtopic: [
                { "name": "Sets and Their Representation" },
                { "name": "Union, Intersection, and Complement of Sets and Their Algebraic Properties" },
                { "name": "Power Set" },
                { "name": "Relation" },
                { "name": "Types of Relations" },
                { "name": "Equivalence Relations" },
                { "name": "Functions" },
                { "name": "One-One, Into, and Onto Functions" },
                { "name": "Composition of Functions" }
              ],
              
              },
              {name: "Complex Numbers and Quadratic Equations", completed: false,
                weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                subtopics:
              [
                { "name": "Complex Numbers as Ordered Pairs of Reals" },
                { "name": "Representation of Complex Numbers in the Form (a + ib) and Argand Diagram" },
                { "name": "Algebra of Complex Numbers" },
                { "name": "Modulus and Argument (or Amplitude) of a Complex Number" },
                { "name": "Square Root of a Complex Number" },
                { "name": "Triangle Inequality" },
                { "name": "Quadratic Equations in Real and Complex Number System and Their Solutions" },
                { "name": "Relation Between Roots and Coefficients" },
                { "name": "Nature of Roots" },
                { "name": "Formation of Quadratic Equations with Given Roots" }
              ]
            },
            {name: "Matrices and Determinants", completed: false,
              weakpoints:[],
              coveredpoints:[],
              youtubeURL:[],
              subtopics:
              [
                { "name": "Matrices: Algebra of Matrices" },
                { "name": "Types of Matrices" },
                { "name": "Matrices of Order Two and Three" },
                { "name": "Determinants: Properties of Determinants" },
                { "name": "Evaluation of Determinants" },
                { "name": "Area of Triangles Using Determinants" },
                { "name": "Adjoint and Evaluation of Inverse of a Square Matrix Using Determinants and Elementary Transformations" },
                { "name": "Test of Consistency and Solution of Simultaneous Linear Equations in Two or Three Variables Using Determinants and Matrices" }
              ]
              
            },

            
            {name: "Permutations and Combinations", completed: false,
              weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
              subtopics:
              [
                { "name": "The Fundamental Principle of Counting" },
                { "name": "Permutation as an Arrangement" },
                { "name": "Combination as a Selection" },
                { "name": "Meaning of P(n, r) and C(n, r)" },
                { "name": "Simple Applications of Permutations and Combinations" }
              ]
            },

              
            ] },
            { name: "Chemistry", 
              chapters: [{ name: "Some Basic Concepts of Chemistry", completed: false,
                weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                subtopic: [
                { "name": "Matter and Its Nature" },
                { "name": "Daltons Atomic Theory" },
                { "name": "Concept of Atom, Molecule, Element, and Compound" },
                { "name": "Physical Quantities and Their Measurements in Chemistry" },
                { "name": "Precision and Accuracy" },
                { "name": "Significant Figures" },
                { "name": "SI Units" },
                { "name": "Dimensional Analysis" },
                { "name": "Laws of Chemical Combination" },
                { "name": "Atomic and Molecular Masses" },
                { "name": "Mole Concept" },
                { "name": "Molar Mass" },
                { "name": "Percentage Composition" },
                { "name": "Empirical and Molecular Formulae" },
                { "name": "Chemical Equations and Stoichiometry" }
              ],
              
              },
              {name: "States of Matter", completed: false,
                weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                subtopics:
                [
                  { "name": "Classification of Matter into Solid, Liquid, and Gaseous States" },
                  { "name": "Gaseous State: Measurable Properties of Gases" },
                  { "name": "Gas Laws  Boyles Law, Charless Law, Grahams Law of Diffusion, Avogadros Law, Daltons Law of Partial Pressure" },
                  { "name": "Concept of Absolute Scale of Temperature" },
                  { "name": "Ideal Gas Equation" },
                  { "name": "Kinetic Theory of Gases (Only Postulates)" },
                  { "name": "Concept of Average, Root Mean Square, and Most Probable Velocities" },
                  { "name": "Real Gases and Deviation from Ideal Behaviour" },
                  { "name": "Compressibility Factor" },
                  { "name": "Van der Waals Equation" },
                  { "name": "Liquefaction of Gases" },
                  { "name": "Critical Constants" },
                  { "name": "Liquid State: Properties of Liquids  Vapour Pressure, Viscosity, and Surface Tension" },
                  { "name": "Effect of Temperature on Liquid Properties (Qualitative Treatment)" },
                  { "name": "Solid State: Classification of Solids  Molecular, Ionic, Covalent, and Metallic Solids" },
                  { "name": "Amorphous and Crystalline Solids (Elementary Idea)" },
                  { "name": "Braggs Law and Its Applications" },
                  { "name": "Unit Cell and Lattices" },
                  { "name": "Packing in Solids (fcc, bcc, and hcp Lattices)" },
                  { "name": "Voids in Solids" },
                  { "name": "Calculations Involving Unit Cell Parameters" },
                  { "name": "Imperfections in Solids" },
                  { "name": "Electrical, Magnetic, and Dielectric Properties of Solids" }
                ],
                
            },
            {name: "Atomic Structure", completed: false,
              weakpoints:[],
              coveredpoints:[],
              youtubeURL:[],
              subtopics:
              [
                { "name": "Thomson and Rutherford Atomic Models and Their Limitations" },
                { "name": "Nature of Electromagnetic Radiation" },
                { "name": "Photoelectric Effect" },
                { "name": "Spectrum of the Hydrogen Atom" },
                { "name": "Bohr Model of Hydrogen Atom – Postulates and Derivation of Electron Energy and Orbit Radii" },
                { "name": "Limitations of Bohrs Model" },
                { "name": "Dual Nature of Matter" },
                { "name": "de-Broglie Relationship" },
                { "name": "Heisenberg Uncertainty Principle" },
                { "name": "Elementary Ideas of Quantum Mechanics" },
                { "name": "Quantum Mechanical Model of an Atom and Its Important Features" },
                { "name": "Concept of Atomic Orbitals as One-Electron Wave Functions" },
                { "name": "Variation of Ψ1 and Ψ2 with r for 1s and 2s Orbitals" },
                { "name": "Various Quantum Numbers (Principal, Angular Momentum, and Magnetic Quantum Numbers) and Their Significance" },
                { "name": "Shapes of s, p, and d Orbitals" },
                { "name": "Electron Spin and Spin Quantum Number" },
                { "name": "Rules for Filling Electrons in Orbitals – Aufbau Principle, Pauli Exclusion Principle, and Hunds Rule" },
                { "name": "Electronic Configuration of Elements" },
                { "name": "Extra Stability of Half-Filled and Completely Filled Orbitals" }
              ]              
              
            },

            
            {name: "Chemical Bonding and Molecular Structure", completed: false,
              weakpoints:[],
              coveredpoints:[],
              youtubeURL:[],
              subtopics:
              [
                { "name": "Kossel  Lewis Approach to Chemical Bond Formation" },
                { "name": "Concept of Ionic and Covalent Bonds" },
                { "name": "Ionic Bonding: Formation of Ionic Bonds" },
                { "name": "Factors Affecting the Formation of Ionic Bonds" },
                { "name": "Calculation of Lattice Enthalpy" },
                { "name": "Covalent Bonding: Concept of Electronegativity" },
                { "name": "Fajans Rule" },
                { "name": "Dipole Moment" },
                { "name": "Valence Shell Electron Pair Repulsion (VSEPR) Theory and Shapes of Simple Molecules" },
                { "name": "Quantum Mechanical Approach to Covalent Bonding: Valence Bond Theory and Its Important Features" },
                { "name": "Concept of Hybridization Involving s, p, and d Orbitals" },
                { "name": "Resonance" },
                { "name": "Molecular Orbital Theory: Important Features" },
                { "name": "Linear Combination of Atomic Orbitals (LCAO)" },
                { "name": "Types of Molecular Orbitals: Bonding and Antibonding" },
                { "name": "Sigma and Pi Bonds" },
                { "name": "Molecular Orbital Electronic Configurations of Homonuclear Diatomic Molecules" },
                { "name": "Concept of Bond Order, Bond Length, and Bond Energy" },
                { "name": "Elementary Idea of Metallic Bonding" },
                { "name": "Hydrogen Bonding and Its Applications" }
              ]
              
            },          
            ] }
            ],
          },
          {
            level: "12th",
            subjects: [
              { name: "Physics", 
                chapters: [{ name: "Electrostatics", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopic: [
                  { "name": "Electric Charges: Conservation of Charge" },
                  { "name": "Coulombs Law - Forces Between Two Point Charges" },
                  { "name": "Forces Between Multiple Charges: Superposition Principle and Continuous Charge Distribution" },
                  { "name": "Electric Field: Electric Field Due to a Point Charge" },
                  { "name": "Electric Field Lines" },
                  { "name": "Electric Dipole" },
                  { "name": "Electric Field Due to a Dipole" },
                  { "name": "Torque on a Dipole in a Uniform Electric Field" },
                  { "name": "Electric Flux" },
                  { "name": "Gausss Law and Its Applications" },
                  { "name": "Field Due to an Infinitely Long Uniformly Charged Straight Wire" },
                  { "name": "Field Due to a Uniformly Charged Infinite Plane Sheet" },
                  { "name": "Field Due to a Uniformly Charged Thin Spherical Shell" },
                  { "name": "Electric Potential and Its Calculation for a Point Charge" },
                  { "name": "Electric Potential of an Electric Dipole" },
                  { "name": "Electric Potential of a System of Charges" },
                  { "name": "Equipotential Surfaces" },
                  { "name": "Electrical Potential Energy of a System of Two Point Charges in an Electrostatic Field" },
                  { "name": "Conductors and Insulators" },
                  { "name": "Dielectrics and Electric Polarization" },
                  { "name": "Capacitor" },
                  { "name": "Combination of Capacitors in Series and Parallel" },
                  { "name": "Capacitance of a Parallel Plate Capacitor with and without Dielectric Medium" },
                  { "name": "Energy Stored in a Capacitor" }
                ]
                
                
                },
                {name: "Current Electricity", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopics:
                  [
                    { "name": "Electric Current" },
                    { "name": "Drift Velocity" },
                    { "name": "Ohms Law" },
                    { "name": "Electrical Resistance" },
                    { "name": "Resistances of Different Materials" },
                    { "name": "V-I Characteristics of Ohmic and Non-Ohmic Conductors" },
                    { "name": "Electrical Energy and Power" },
                    { "name": "Electrical Resistivity" },
                    { "name": "Colour Code for Resistors" },
                    { "name": "Series and Parallel Combinations of Resistors" },
                    { "name": "Temperature Dependence of Resistance" },
                    { "name": "Electric Cell and Its Internal Resistance" },
                    { "name": "Potential Difference and EMF of a Cell" },
                    { "name": "Combination of Cells in Series and Parallel" },
                    { "name": "Kirchhoffs Laws and Their Applications" },
                    { "name": "Wheatstone Bridge" },
                    { "name": "Metre Bridge" },
                    { "name": "Potentiometer  Principle and Its Applications" }
                  ]
                  
              },
              {name: "Magnetic Effects of Current and Magnetism", completed: false,
                weakpoints:[],
                coveredpoints:[],
                youtubeURL:[],
                subtopics:
                [
                  { "name": "Biot  Savart Law and Its Application to Current Carrying Circular Loop" },
                  { "name": "Amperes Law and Its Applications to Infinitely Long Current Carrying Straight Wire and Solenoid" },
                  { "name": "Force on a Moving Charge in Uniform Magnetic and Electric Fields" },
                  { "name": "Cyclotron" },
                  { "name": "Force on a Current-Carrying Conductor in a Uniform Magnetic Field" },
                  { "name": "Force Between Two Parallel Current Carrying Conductors - Definition of Ampere" },
                  { "name": "Torque Experienced by a Current Loop in a Uniform Magnetic Field" },
                  { "name": "Moving Coil Galvanometer, Its Current Sensitivity and Conversion to Ammeter and Voltmeter" },
                  { "name": "Current Loop as a Magnetic Dipole and Its Magnetic Dipole Moment" },
                  { "name": "Bar Magnet as an Equivalent Solenoid" },
                  { "name": "Magnetic Field Lines" },
                  { "name": "Earths Magnetic Field and Magnetic Elements" },
                  { "name": "Para-, Dia-, and Ferromagnetic Substances" },
                  { "name": "Magnetic Susceptibility and Permeability" },
                  { "name": "Hysteresis" },
                  { "name": "Electromagnets and Permanent Magnets" }
                ]
                
              },
  
              
              {name: "Electromagnetic Waves", completed: false,
                weakpoints:[],
                coveredpoints:[],
                youtubeURL:[],
                subtopics:
                [
                  { "name": "Electromagnetic Induction: Faradays Law" },
                  { "name": "Induced EMF and Current: Lenzs Law, Eddy Currents" },
                  { "name": "Self and Mutual Inductance" },
                  { "name": "Alternating Currents" },
                  { "name": "Peak and RMS Value of Alternating Current/Voltage" },
                  { "name": "Reactance and Impedance" },
                  { "name": "LCR Series Circuit" },
                  { "name": "Resonance" },
                  { "name": "Quality Factor" },
                  { "name": "Power in AC Circuits, Wattless Current" },
                  { "name": "AC Generator" },
                  { "name": "Transformer" }
                ]
                
              },
  
                
              ] },
              { name: "Mathematics", 
                chapters: [{ name: " Relations and Functions", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopic:[
                    { "name": "Types of Relations: Reflexive, Symmetric, Transitive, and Equivalence" },
                    { "name": "Functions: One-One, Onto, and Inverse" },
                    { "name": "Composition of Functions" },
                    { "name": "Binary Operations" }
                  ]
                  },
            {name: " Inverse Trigonometric Functions", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
              subtopics:
              [
                { "name": "Domains and Ranges of Inverse Trigonometric Functions" },
                { "name": "Graphs of Inverse Trigonometric Functions" },
                { "name": "Properties and Formulas of Inverse Trigonometric Functions" }
              ]              
              
            },

            {name: "Matrices and Determinants", completed: false,
              weakpoints:[],
              coveredpoints:[],
              youtubeURL:[],
           subtopics:
           [
            { "name": "Types of Matrices (Square, Diagonal, Symmetric, Skew-Symmetric, Identity)" },
            { "name": "Operations on Matrices (Addition, Multiplication, Transpose)" },
            { "name": "Determinant of a Matrix and Properties" },
            { "name": "Inverse of a Matrix Using Adjoint" },
            { "name": "Applications of Determinants in Solving System of Equations (Cramers Rule)" }
           ]
                      
          
        },
        {name: "Continuity and Differentiability", completed: false,
          weakpoints:[],
          coveredpoints:[],
          youtubeURL:[],
      subtopics:
      [
        { "name": "Continuity of a Function at a Point and in an Interval" },
        { "name": "Differentiability and Its Relation with Continuity" },
        { "name": "Derivative of Implicit, Parametric, and Logarithmic Functions" },
        { "name": "Differentiation of Inverse Trigonometric Functions" },
        { "name": "Logarithmic Differentiation" },
        { "name": "Second-Order Derivatives" }
      ]                        
      
    },
            
            ] },

            { name: "Chemistry", 
              chapters: [{ name: "Solutions", completed: false,
                weakpoints:[],
                coveredpoints:[],
                youtubeURL:[],
                subtopic:[
                { "name": "Different Methods for Expressing the Concentration of a Solution: Molality, Molarity, Mole Fraction, Percentage (by Volume and Mass Both)" },
                { "name": "Vapour Pressure of Solutions and Raoult’s Law" },
                { "name": "Ideal and Non-Ideal Solutions, Vapour Pressure – Composition, Plots for Ideal and Non-Ideal Solutions" },
                { "name": "Colligative Properties of Dilute Solutions: Relative Lowering of Vapour Pressure, Depression of Freezing Point, Elevation of Boiling Point, and Osmotic Pressure" },
                { "name": "Determination of Molecular Mass Using Colligative Properties" },
                { "name": "Abnormal Value of Molar Mass, Hoff Factor, and Its Significance" }
              ]              
              
              },

              {name: "General Principles and Processes of Isolation of Elements", completed: false,
                weakpoints:[],
                coveredpoints:[],
                youtubeURL:[],
                subtopics:
                [
                  { "name": "Modes of Occurrence of Elements in Nature: Minerals and Ores" },
                  { "name": "Steps Involved in the Extraction of Metals: Concentration, Reduction (Chemical and Electrolytic Methods), and Refining" },
                  { "name": "Extraction of Metals with Special Reference to Al, Cu, Zn, and Fe" },
                  { "name": "Thermodynamic and Electrochemical Principles Involved in the Extraction of Metals" }
                ]
                
              },
              {name: "The p-Block Elements", completed: false,
                weakpoints:[],
                coveredpoints:[],
                youtubeURL:[],
                subtopics:
                [
                  { "name": "Group 13 to Group 18 Elements: General Introduction, Electronic Configuration, and General Trends in Physical and Chemical Properties" },
                  { "name": "Unique Behaviour of the First Element in Each Group" },
                  { "name": "Group 13: Preparation, Properties, and Uses of Boron and Aluminium" },
                  { "name": "Structure, Properties, and Uses of Borax, Boric Acid, Diborane, Boron Trifluoride, Aluminium Chloride, and Alums" },
                  { "name": "Group 14: Tendency for Catenation; Structure, Properties, and Uses of Allotropes and Oxides of Carbon" },
                  { "name": "Silicon Tetrachloride, Silicates, Zeolites, and Silicones" },
                  { "name": "Group 15: Properties and Uses of Nitrogen and Phosphorus" },
                  { "name": "Allotropic Forms of Phosphorus" },
                  { "name": "Preparation, Properties, Structure, and Uses of Ammonia, Nitric Acid, Phosphine, and Phosphorus Halides (PCl₃, PCl₅)" },
                  { "name": "Structures of Oxides and Oxoacids of Nitrogen and Phosphorus" },
                  { "name": "Group 16: Preparation, Properties, Structures, and Uses of Dioxygen and Ozone" },
                  { "name": "Allotropic Forms of Sulphur" },
                  { "name": "Preparation, Properties, Structures, and Uses of Sulphur Dioxide and Sulphuric Acid (Including Its Industrial Preparation)" },
                  { "name": "Structures of Oxoacids of Sulphur" },
                  { "name": "Group 17: Preparation, Properties, and Uses of Chlorine and Hydrochloric Acid" },
                  { "name": "Trends in the Acidic Nature of Hydrogen Halides" },
                  { "name": "Structures of Interhalogen Compounds and Oxides and Oxyacids of Halogens" },
                  { "name": "Group 18: Occurrence and Uses of Noble Gases" },
                  { "name": "Structures of Fluorides and Oxides of Xenon" }
                ]
                
            },
            {name: "The d- and f-Block Elements", completed: false,
              weakpoints:[],
              coveredpoints:[],
              youtubeURL:[],
              subtopics:
              [
                { "name": "Transition Elements: General Introduction, Electronic Configuration, Occurrence, and Characteristics" },
                { "name": "General Trends in Properties of the First-Row Transition Elements: Physical Properties, Ionization Enthalpy, Oxidation States, Atomic Radii, Colour, Catalytic Behaviour, Magnetic Properties, Complex Formation, Interstitial Compounds, Alloy Formation" },
                { "name": "Preparation, Properties, and Uses of K₂Cr₂O₇ and KMnO₄" },
                { "name": "Inner Transition Elements: Lanthanides - Electronic Configuration, Oxidation States, Chemical Reactivity, and Lanthanoid Contraction" },
                { "name": "Inner Transition Elements: Actinoids - Electronic Configuration and Oxidation States" }
              ]              
              
            },              
            ] },

            ],
          },
        ],
        //till here
      });

      await newJEEData.save();
      console.log("JEE syllabus assigned.");
    } else if (student.exam === "NEET") {
      const newNEETData = new NEETExam({
        studentId,
        standards: [
          {
            level: "11th",
            subjects: [
              {
                name: "Physics",
                chapters: [{ name: "Physics and Measurement", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                   subtopics: [
                  { "name": "Physics, Technology, and Society" },
                  { "name": "SI Units" },
                  { "name": "Fundamental and Derived Units" },
                  { "name": "Least Count" },
                  { "name": "Accuracy and Precision of Measuring Instruments" },
                  { "name": "Errors in Measurement" },
                  { "name": "Dimensions of Physical Quantities" },
                  { "name": "Dimensional Analysis and Its Applications" }
                ] },
                { name: "Kinematics", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopics: [
                  { "name": "Motion in 1D" },
                  { "name": "The Frame of Reference" },
                  { "name": "Motion in a Straight Line" },
                  { "name": "Position-Time Graph" },
                  { "name": "Speed and Velocity" },
                  { "name": "Uniform and Non-Uniform Motion" },
                  { "name": "Average Speed and Instantaneous Velocity" },
                  { "name": "Uniformly Accelerated Motion" },
                  { "name": "Velocity-Time Graph" },
                  { "name": "Position-Time Graph" },
                  { "name": "Relations for Uniformly Accelerated Motion" },
                  { "name": "Scalars and Vectors" },
                  { "name": "Vector Addition and Subtraction" },
                  { "name": "Zero Vector" },
                  { "name": "Scalar and Vector Products" },
                  { "name": "Unit Vector" },
                  { "name": "Resolution of a Vector" },
                  { "name": "Relative Velocity" },
                  { "name": "Motion in a Plane" },
                  { "name": "Projectile Motion" },
                  { "name": "Uniform Circular Motion" }
                ]
                 },

                 { name: "Laws of Motion", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopics: [
                  { "name": "Force and Inertia" },
                  { "name": "Newtons First Law of Motion" },
                  { "name": "Momentum" },
                  { "name": "Newtons Second Law of Motion" },
                  { "name": "Impulses" },
                  { "name": "Newtons Third Law of Motion" },
                  { "name": "Law of Conservation of Linear Momentum and Its Applications" },
                  { "name": "Equilibrium of Concurrent Forces" },
                  { "name": "Static and Kinetic Friction" },
                  { "name": "Laws of Friction" },
                  { "name": "Rolling Friction" },
                  { "name": "Dynamics of Uniform Circular Motion" },
                  { "name": "Centripetal Force and Its Applications" }
                ]                
                 },

                 { name: "Work, Energy and Power", completed: false,
                  
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopics: [
                  { "name": "Work Done by a Constant Force and a Variable Force" },
                  { "name": "Kinetic and Potential Energies" },
                  { "name": "Work-Energy Theorem" },
                  { "name": "Power" },
                  { "name": "The Potential Energy of a Spring" },
                  { "name": "Conservation of Mechanical Energy" },
                  { "name": "Conservative and Non-Conservative Forces" },
                  { "name": "Elastic and Inelastic Collisions in One and Two Dimensions" }
                ]
                }
              ],
              },
              { name: "Mathematics", 
              chapters: [{ name: "Sets & Relations", completed: false,
                weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                subtopic: [
                { "name": "Sets and Their Representation" },
                { "name": "Union, Intersection, and Complement of Sets and Their Algebraic Properties" },
                { "name": "Power Set" },
                { "name": "Relation" },
                { "name": "Types of Relations" },
                { "name": "Equivalence Relations" },
                { "name": "Functions" },
                { "name": "One-One, Into, and Onto Functions" },
                { "name": "Composition of Functions" }
              ],
              
              },
              {name: "Complex Numbers and Quadratic Equations", completed: false,
                weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                subtopics:
              [
                { "name": "Complex Numbers as Ordered Pairs of Reals" },
                { "name": "Representation of Complex Numbers in the Form (a + ib) and Argand Diagram" },
                { "name": "Algebra of Complex Numbers" },
                { "name": "Modulus and Argument (or Amplitude) of a Complex Number" },
                { "name": "Square Root of a Complex Number" },
                { "name": "Triangle Inequality" },
                { "name": "Quadratic Equations in Real and Complex Number System and Their Solutions" },
                { "name": "Relation Between Roots and Coefficients" },
                { "name": "Nature of Roots" },
                { "name": "Formation of Quadratic Equations with Given Roots" }
              ]
            },
            {name: "Matrices and Determinants", completed: false,
              weakpoints:[],
              coveredpoints:[],
              youtubeURL:[],
              subtopics:
              [
                { "name": "Matrices: Algebra of Matrices" },
                { "name": "Types of Matrices" },
                { "name": "Matrices of Order Two and Three" },
                { "name": "Determinants: Properties of Determinants" },
                { "name": "Evaluation of Determinants" },
                { "name": "Area of Triangles Using Determinants" },
                { "name": "Adjoint and Evaluation of Inverse of a Square Matrix Using Determinants and Elementary Transformations" },
                { "name": "Test of Consistency and Solution of Simultaneous Linear Equations in Two or Three Variables Using Determinants and Matrices" }
              ]
              
            },

            
            {name: "Permutations and Combinations", completed: false,
              weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
              subtopics:
              [
                { "name": "The Fundamental Principle of Counting" },
                { "name": "Permutation as an Arrangement" },
                { "name": "Combination as a Selection" },
                { "name": "Meaning of P(n, r) and C(n, r)" },
                { "name": "Simple Applications of Permutations and Combinations" }
              ]
            },

              
            ] },
            { name: "Chemistry", 
              chapters: [{ name: "Some Basic Concepts of Chemistry", completed: false,
                weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                subtopic: [
                { "name": "Matter and Its Nature" },
                { "name": "Daltons Atomic Theory" },
                { "name": "Concept of Atom, Molecule, Element, and Compound" },
                { "name": "Physical Quantities and Their Measurements in Chemistry" },
                { "name": "Precision and Accuracy" },
                { "name": "Significant Figures" },
                { "name": "SI Units" },
                { "name": "Dimensional Analysis" },
                { "name": "Laws of Chemical Combination" },
                { "name": "Atomic and Molecular Masses" },
                { "name": "Mole Concept" },
                { "name": "Molar Mass" },
                { "name": "Percentage Composition" },
                { "name": "Empirical and Molecular Formulae" },
                { "name": "Chemical Equations and Stoichiometry" }
              ],
              
              },
              {name: "States of Matter", completed: false,
                weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                subtopics:
                [
                  { "name": "Classification of Matter into Solid, Liquid, and Gaseous States" },
                  { "name": "Gaseous State: Measurable Properties of Gases" },
                  { "name": "Gas Laws  Boyles Law, Charless Law, Grahams Law of Diffusion, Avogadros Law, Daltons Law of Partial Pressure" },
                  { "name": "Concept of Absolute Scale of Temperature" },
                  { "name": "Ideal Gas Equation" },
                  { "name": "Kinetic Theory of Gases (Only Postulates)" },
                  { "name": "Concept of Average, Root Mean Square, and Most Probable Velocities" },
                  { "name": "Real Gases and Deviation from Ideal Behaviour" },
                  { "name": "Compressibility Factor" },
                  { "name": "Van der Waals Equation" },
                  { "name": "Liquefaction of Gases" },
                  { "name": "Critical Constants" },
                  { "name": "Liquid State: Properties of Liquids  Vapour Pressure, Viscosity, and Surface Tension" },
                  { "name": "Effect of Temperature on Liquid Properties (Qualitative Treatment)" },
                  { "name": "Solid State: Classification of Solids  Molecular, Ionic, Covalent, and Metallic Solids" },
                  { "name": "Amorphous and Crystalline Solids (Elementary Idea)" },
                  { "name": "Braggs Law and Its Applications" },
                  { "name": "Unit Cell and Lattices" },
                  { "name": "Packing in Solids (fcc, bcc, and hcp Lattices)" },
                  { "name": "Voids in Solids" },
                  { "name": "Calculations Involving Unit Cell Parameters" },
                  { "name": "Imperfections in Solids" },
                  { "name": "Electrical, Magnetic, and Dielectric Properties of Solids" }
                ],
                
            },
            {name: "Atomic Structure", completed: false,
              weakpoints:[],
              coveredpoints:[],
              youtubeURL:[],
              subtopics:
              [
                { "name": "Thomson and Rutherford Atomic Models and Their Limitations" },
                { "name": "Nature of Electromagnetic Radiation" },
                { "name": "Photoelectric Effect" },
                { "name": "Spectrum of the Hydrogen Atom" },
                { "name": "Bohr Model of Hydrogen Atom – Postulates and Derivation of Electron Energy and Orbit Radii" },
                { "name": "Limitations of Bohrs Model" },
                { "name": "Dual Nature of Matter" },
                { "name": "de-Broglie Relationship" },
                { "name": "Heisenberg Uncertainty Principle" },
                { "name": "Elementary Ideas of Quantum Mechanics" },
                { "name": "Quantum Mechanical Model of an Atom and Its Important Features" },
                { "name": "Concept of Atomic Orbitals as One-Electron Wave Functions" },
                { "name": "Variation of Ψ1 and Ψ2 with r for 1s and 2s Orbitals" },
                { "name": "Various Quantum Numbers (Principal, Angular Momentum, and Magnetic Quantum Numbers) and Their Significance" },
                { "name": "Shapes of s, p, and d Orbitals" },
                { "name": "Electron Spin and Spin Quantum Number" },
                { "name": "Rules for Filling Electrons in Orbitals – Aufbau Principle, Pauli Exclusion Principle, and Hunds Rule" },
                { "name": "Electronic Configuration of Elements" },
                { "name": "Extra Stability of Half-Filled and Completely Filled Orbitals" }
              ]              
              
            },

            
            {name: "Chemical Bonding and Molecular Structure", completed: false,
              weakpoints:[],
              coveredpoints:[],
              youtubeURL:[],
              subtopics:
              [
                { "name": "Kossel  Lewis Approach to Chemical Bond Formation" },
                { "name": "Concept of Ionic and Covalent Bonds" },
                { "name": "Ionic Bonding: Formation of Ionic Bonds" },
                { "name": "Factors Affecting the Formation of Ionic Bonds" },
                { "name": "Calculation of Lattice Enthalpy" },
                { "name": "Covalent Bonding: Concept of Electronegativity" },
                { "name": "Fajans Rule" },
                { "name": "Dipole Moment" },
                { "name": "Valence Shell Electron Pair Repulsion (VSEPR) Theory and Shapes of Simple Molecules" },
                { "name": "Quantum Mechanical Approach to Covalent Bonding: Valence Bond Theory and Its Important Features" },
                { "name": "Concept of Hybridization Involving s, p, and d Orbitals" },
                { "name": "Resonance" },
                { "name": "Molecular Orbital Theory: Important Features" },
                { "name": "Linear Combination of Atomic Orbitals (LCAO)" },
                { "name": "Types of Molecular Orbitals: Bonding and Antibonding" },
                { "name": "Sigma and Pi Bonds" },
                { "name": "Molecular Orbital Electronic Configurations of Homonuclear Diatomic Molecules" },
                { "name": "Concept of Bond Order, Bond Length, and Bond Energy" },
                { "name": "Elementary Idea of Metallic Bonding" },
                { "name": "Hydrogen Bonding and Its Applications" }
              ]
              
            },          
            ] }
            ],
          },
          {
            level: "12th",
            subjects: [
              { name: "Physics", 
                chapters: [{ name: "Electrostatics", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopic: [
                  { "name": "Electric Charges: Conservation of Charge" },
                  { "name": "Coulombs Law - Forces Between Two Point Charges" },
                  { "name": "Forces Between Multiple Charges: Superposition Principle and Continuous Charge Distribution" },
                  { "name": "Electric Field: Electric Field Due to a Point Charge" },
                  { "name": "Electric Field Lines" },
                  { "name": "Electric Dipole" },
                  { "name": "Electric Field Due to a Dipole" },
                  { "name": "Torque on a Dipole in a Uniform Electric Field" },
                  { "name": "Electric Flux" },
                  { "name": "Gausss Law and Its Applications" },
                  { "name": "Field Due to an Infinitely Long Uniformly Charged Straight Wire" },
                  { "name": "Field Due to a Uniformly Charged Infinite Plane Sheet" },
                  { "name": "Field Due to a Uniformly Charged Thin Spherical Shell" },
                  { "name": "Electric Potential and Its Calculation for a Point Charge" },
                  { "name": "Electric Potential of an Electric Dipole" },
                  { "name": "Electric Potential of a System of Charges" },
                  { "name": "Equipotential Surfaces" },
                  { "name": "Electrical Potential Energy of a System of Two Point Charges in an Electrostatic Field" },
                  { "name": "Conductors and Insulators" },
                  { "name": "Dielectrics and Electric Polarization" },
                  { "name": "Capacitor" },
                  { "name": "Combination of Capacitors in Series and Parallel" },
                  { "name": "Capacitance of a Parallel Plate Capacitor with and without Dielectric Medium" },
                  { "name": "Energy Stored in a Capacitor" }
                ]
                
                
                },
                {name: "Current Electricity", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopics:
                  [
                    { "name": "Electric Current" },
                    { "name": "Drift Velocity" },
                    { "name": "Ohms Law" },
                    { "name": "Electrical Resistance" },
                    { "name": "Resistances of Different Materials" },
                    { "name": "V-I Characteristics of Ohmic and Non-Ohmic Conductors" },
                    { "name": "Electrical Energy and Power" },
                    { "name": "Electrical Resistivity" },
                    { "name": "Colour Code for Resistors" },
                    { "name": "Series and Parallel Combinations of Resistors" },
                    { "name": "Temperature Dependence of Resistance" },
                    { "name": "Electric Cell and Its Internal Resistance" },
                    { "name": "Potential Difference and EMF of a Cell" },
                    { "name": "Combination of Cells in Series and Parallel" },
                    { "name": "Kirchhoffs Laws and Their Applications" },
                    { "name": "Wheatstone Bridge" },
                    { "name": "Metre Bridge" },
                    { "name": "Potentiometer  Principle and Its Applications" }
                  ]
                  
              },
              {name: "Magnetic Effects of Current and Magnetism", completed: false,
                weakpoints:[],
                coveredpoints:[],
                youtubeURL:[],
                subtopics:
                [
                  { "name": "Biot  Savart Law and Its Application to Current Carrying Circular Loop" },
                  { "name": "Amperes Law and Its Applications to Infinitely Long Current Carrying Straight Wire and Solenoid" },
                  { "name": "Force on a Moving Charge in Uniform Magnetic and Electric Fields" },
                  { "name": "Cyclotron" },
                  { "name": "Force on a Current-Carrying Conductor in a Uniform Magnetic Field" },
                  { "name": "Force Between Two Parallel Current Carrying Conductors - Definition of Ampere" },
                  { "name": "Torque Experienced by a Current Loop in a Uniform Magnetic Field" },
                  { "name": "Moving Coil Galvanometer, Its Current Sensitivity and Conversion to Ammeter and Voltmeter" },
                  { "name": "Current Loop as a Magnetic Dipole and Its Magnetic Dipole Moment" },
                  { "name": "Bar Magnet as an Equivalent Solenoid" },
                  { "name": "Magnetic Field Lines" },
                  { "name": "Earths Magnetic Field and Magnetic Elements" },
                  { "name": "Para-, Dia-, and Ferromagnetic Substances" },
                  { "name": "Magnetic Susceptibility and Permeability" },
                  { "name": "Hysteresis" },
                  { "name": "Electromagnets and Permanent Magnets" }
                ]
                
              },
  
              
              {name: "Electromagnetic Waves", completed: false,
                weakpoints:[],
                coveredpoints:[],
                youtubeURL:[],
                subtopics:
                [
                  { "name": "Electromagnetic Induction: Faradays Law" },
                  { "name": "Induced EMF and Current: Lenzs Law, Eddy Currents" },
                  { "name": "Self and Mutual Inductance" },
                  { "name": "Alternating Currents" },
                  { "name": "Peak and RMS Value of Alternating Current/Voltage" },
                  { "name": "Reactance and Impedance" },
                  { "name": "LCR Series Circuit" },
                  { "name": "Resonance" },
                  { "name": "Quality Factor" },
                  { "name": "Power in AC Circuits, Wattless Current" },
                  { "name": "AC Generator" },
                  { "name": "Transformer" }
                ]
                
              },
  
                
              ] },
              { name: "Mathematics", 
                chapters: [{ name: " Relations and Functions", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                  subtopic:[
                    { "name": "Types of Relations: Reflexive, Symmetric, Transitive, and Equivalence" },
                    { "name": "Functions: One-One, Onto, and Inverse" },
                    { "name": "Composition of Functions" },
                    { "name": "Binary Operations" }
                  ]
                  },
            {name: " Inverse Trigonometric Functions", completed: false,
                  weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
              subtopics:
              [
                { "name": "Domains and Ranges of Inverse Trigonometric Functions" },
                { "name": "Graphs of Inverse Trigonometric Functions" },
                { "name": "Properties and Formulas of Inverse Trigonometric Functions" }
              ]              
              
            },

            {name: "Matrices and Determinants", completed: false,
              weakpoints:[],
              coveredpoints:[],
              youtubeURL:[],
           subtopics:
           [
            { "name": "Types of Matrices (Square, Diagonal, Symmetric, Skew-Symmetric, Identity)" },
            { "name": "Operations on Matrices (Addition, Multiplication, Transpose)" },
            { "name": "Determinant of a Matrix and Properties" },
            { "name": "Inverse of a Matrix Using Adjoint" },
            { "name": "Applications of Determinants in Solving System of Equations (Cramers Rule)" }
           ]
                      
          
        },
        {name: "Continuity and Differentiability", completed: false,
          weakpoints:[],
          coveredpoints:[],
          youtubeURL:[],
      subtopics:
      [
        { "name": "Continuity of a Function at a Point and in an Interval" },
        { "name": "Differentiability and Its Relation with Continuity" },
        { "name": "Derivative of Implicit, Parametric, and Logarithmic Functions" },
        { "name": "Differentiation of Inverse Trigonometric Functions" },
        { "name": "Logarithmic Differentiation" },
        { "name": "Second-Order Derivatives" }
      ]                        
      
    },
            
            ] },

            { name: "Chemistry", 
              chapters: [{ name: "Solutions", completed: false,
                weakpoints:[],
                  coveredpoints:[],
                  youtubeURL:[],
                subtopic:[
                { "name": "Different Methods for Expressing the Concentration of a Solution: Molality, Molarity, Mole Fraction, Percentage (by Volume and Mass Both)" },
                { "name": "Vapour Pressure of Solutions and Raoult’s Law" },
                { "name": "Ideal and Non-Ideal Solutions, Vapour Pressure – Composition, Plots for Ideal and Non-Ideal Solutions" },
                { "name": "Colligative Properties of Dilute Solutions: Relative Lowering of Vapour Pressure, Depression of Freezing Point, Elevation of Boiling Point, and Osmotic Pressure" },
                { "name": "Determination of Molecular Mass Using Colligative Properties" },
                { "name": "Abnormal Value of Molar Mass, Hoff Factor, and Its Significance" }
              ]              
              
              },

              {name: "General Principles and Processes of Isolation of Elements", completed: false,weakpoints:[],
                coveredpoints:[],
                youtubeURL:[], subtopics:
                [
                  { "name": "Modes of Occurrence of Elements in Nature: Minerals and Ores" },
                  { "name": "Steps Involved in the Extraction of Metals: Concentration, Reduction (Chemical and Electrolytic Methods), and Refining" },
                  { "name": "Extraction of Metals with Special Reference to Al, Cu, Zn, and Fe" },
                  { "name": "Thermodynamic and Electrochemical Principles Involved in the Extraction of Metals" }
                ]
                
              },
              {name: "The p-Block Elements", completed: false,
                weakpoints:[],
                coveredpoints:[],
                youtubeURL:[],
                subtopics:
                [
                  { "name": "Group 13 to Group 18 Elements: General Introduction, Electronic Configuration, and General Trends in Physical and Chemical Properties" },
                  { "name": "Unique Behaviour of the First Element in Each Group" },
                  { "name": "Group 13: Preparation, Properties, and Uses of Boron and Aluminium" },
                  { "name": "Structure, Properties, and Uses of Borax, Boric Acid, Diborane, Boron Trifluoride, Aluminium Chloride, and Alums" },
                  { "name": "Group 14: Tendency for Catenation; Structure, Properties, and Uses of Allotropes and Oxides of Carbon" },
                  { "name": "Silicon Tetrachloride, Silicates, Zeolites, and Silicones" },
                  { "name": "Group 15: Properties and Uses of Nitrogen and Phosphorus" },
                  { "name": "Allotropic Forms of Phosphorus" },
                  { "name": "Preparation, Properties, Structure, and Uses of Ammonia, Nitric Acid, Phosphine, and Phosphorus Halides (PCl₃, PCl₅)" },
                  { "name": "Structures of Oxides and Oxoacids of Nitrogen and Phosphorus" },
                  { "name": "Group 16: Preparation, Properties, Structures, and Uses of Dioxygen and Ozone" },
                  { "name": "Allotropic Forms of Sulphur" },
                  { "name": "Preparation, Properties, Structures, and Uses of Sulphur Dioxide and Sulphuric Acid (Including Its Industrial Preparation)" },
                  { "name": "Structures of Oxoacids of Sulphur" },
                  { "name": "Group 17: Preparation, Properties, and Uses of Chlorine and Hydrochloric Acid" },
                  { "name": "Trends in the Acidic Nature of Hydrogen Halides" },
                  { "name": "Structures of Interhalogen Compounds and Oxides and Oxyacids of Halogens" },
                  { "name": "Group 18: Occurrence and Uses of Noble Gases" },
                  { "name": "Structures of Fluorides and Oxides of Xenon" }
                ]
                
            },
            {name: "The d- and f-Block Elements", completed: false,
              weakpoints:[],
              coveredpoints:[],
              youtubeURL:[],  
              subtopics:
              [
                { "name": "Transition Elements: General Introduction, Electronic Configuration, Occurrence, and Characteristics" },
                { "name": "General Trends in Properties of the First-Row Transition Elements: Physical Properties, Ionization Enthalpy, Oxidation States, Atomic Radii, Colour, Catalytic Behaviour, Magnetic Properties, Complex Formation, Interstitial Compounds, Alloy Formation" },
                { "name": "Preparation, Properties, and Uses of K₂Cr₂O₇ and KMnO₄" },
                { "name": "Inner Transition Elements: Lanthanides - Electronic Configuration, Oxidation States, Chemical Reactivity, and Lanthanoid Contraction" },
                { "name": "Inner Transition Elements: Actinoids - Electronic Configuration and Oxidation States" }
              ]              
              
            },              
            ] },

            ],
          },
        ],
      });

      await newNEETData.save();
      console.log("NEET syllabus assigned.");
    }
  } catch (error) {
    console.error("Error assigning syllabus:", error);
  }
}

// Fetch student syllabus
async function getStudentSyllabus(req, res) {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const ExamModel = student.exam === "JEE" ? JEEExam : NEETExam;
    const syllabus = await ExamModel.findOne({ studentId });

    res.json(syllabus);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default { assignExamSyllabus, getStudentSyllabus };

