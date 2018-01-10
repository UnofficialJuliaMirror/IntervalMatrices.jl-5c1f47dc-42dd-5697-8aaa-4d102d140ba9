var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#IntervalMatrices.jl-1",
    "page": "Home",
    "title": "IntervalMatrices.jl",
    "category": "section",
    "text": "DocTestFilters = [r\"[0-9\\.]+ seconds \\(.*\\)\"]IntervalMatrices is a Julia package to work with matrices that have uncertain parameters."
},

{
    "location": "index.html#Features-1",
    "page": "Home",
    "title": "Features",
    "category": "section",
    "text": "An IntervalMatrix type.\nArithmetics between scalars, closed intervals and interval matrices.\nOverapproximation and underapproximation routines for the exponential of an interval matrix at different orders."
},

{
    "location": "index.html#Library-Outline-1",
    "page": "Home",
    "title": "Library Outline",
    "category": "section",
    "text": "Pages = [\n    \"lib/types.md\",\n    \"lib/methods.md\"\n]\nDepth = 2"
},

{
    "location": "lib/types.html#",
    "page": "Types",
    "title": "Types",
    "category": "page",
    "text": ""
},

{
    "location": "lib/types.html#Types-1",
    "page": "Types",
    "title": "Types",
    "category": "section",
    "text": "This section describes systems types implemented in IntervalMatrices.jl.Pages = [\"types.md\"]\nDepth = 3CurrentModule = IntervalMatrices\nDocTestSetup = quote\n    using IntervalMatrices\nend"
},

{
    "location": "lib/types.html#IntervalMatrices.AbstractIntervalMatrix",
    "page": "Types",
    "title": "IntervalMatrices.AbstractIntervalMatrix",
    "category": "Type",
    "text": "AbstractIntervalMatrix{IT} <: AbstractMatrix{IT}\n\nAbstract supertype for interval matrix types.\n\n\n\n"
},

{
    "location": "lib/types.html#Abstract-interval-operators-1",
    "page": "Types",
    "title": "Abstract interval operators",
    "category": "section",
    "text": "AbstractIntervalMatrix"
},

{
    "location": "lib/types.html#IntervalMatrices.IntervalMatrix",
    "page": "Types",
    "title": "IntervalMatrices.IntervalMatrix",
    "category": "Type",
    "text": "IntervalMatrix{T, IT <: AbstractInterval{T}} <: AbstractIntervalMatrix{IT}\n\nInterval matrix, this type is parametrized in the number field and the type of interval set.\n\nFields\n\nmat – matrix whose entries are intervals\n\nExamples\n\njulia> A = IntervalMatrix([-0.9±0.1 0±0; 0±0 -0.9±0.1])\n\n2×2 IntervalMatrices.IntervalMatrix{Float64,IntervalSets.ClosedInterval{Float64}}:\n -1.0..-0.8  0.0..0.0\n 0.0..0.0    -1.0..-0.8\n\n\n\n"
},

{
    "location": "lib/types.html#Interval-matrix-1",
    "page": "Types",
    "title": "Interval matrix",
    "category": "section",
    "text": "IntervalMatrix"
},

{
    "location": "lib/methods.html#",
    "page": "Methods",
    "title": "Methods",
    "category": "page",
    "text": ""
},

{
    "location": "lib/methods.html#IntervalMatrices.left",
    "page": "Methods",
    "title": "IntervalMatrices.left",
    "category": "Function",
    "text": "left(A::IntervalMatrix)\n\nThe left part of this interval matrix, which corresponds to the left of each interval element in the matrix.\n\nInput\n\nA – interval matrix\n\n\n\n"
},

{
    "location": "lib/methods.html#IntervalMatrices.right",
    "page": "Methods",
    "title": "IntervalMatrices.right",
    "category": "Function",
    "text": "right(A::IntervalMatrix)\n\nThe right part of this interval matrix, which corresponds to the right of each interval element in the matrix.\n\nInput\n\nA – interval matrix\n\n\n\n"
},

{
    "location": "lib/methods.html#IntervalMatrices.quadratic_expansion",
    "page": "Methods",
    "title": "IntervalMatrices.quadratic_expansion",
    "category": "Function",
    "text": "quadratic_expansion(A::IntervalMatrix, t, p)\n\nExactly compute the quadratic formula At + 12A^2 * t^2 using interval arithmetics.\n\nInput\n\nA – interval matrix\nt – non-negative time value\n\nAlgorithm\n\nSee Lemma 1 in Reachability Analysis of Linear Systems with Uncertain Parameters and Inputs by M. Althoff, O. Stursberg, M. Buss.\n\n\n\n"
},

{
    "location": "lib/methods.html#IntervalMatrices.expm_overapproximation",
    "page": "Methods",
    "title": "IntervalMatrices.expm_overapproximation",
    "category": "Function",
    "text": "expm_overapproximation(M::IntervalMatrix{T, <: AbstractInterval{T}}, t, p) where {T}\n\nOverapproximation of the exponential of an interval matrix.\n\nInput\n\nA – interval matrix\nt – non-negative time value\np – order of the appproximation\n\nAlgorithm\n\nSee Theorem 1 in Reachability Analysis of Linear Systems with Uncertain Parameters and Inputs by M. Althoff, O. Stursberg, M. Buss.\n\n\n\n"
},

{
    "location": "lib/methods.html#IntervalMatrices.expm_underapproximation",
    "page": "Methods",
    "title": "IntervalMatrices.expm_underapproximation",
    "category": "Function",
    "text": "expm_underapproximation(M::IntervalMatrix{T, <: AbstractInterval{T}}, t, p) where {T}\n\nOverapproximation of the exponential of an interval matrix.\n\nInput\n\nA – interval matrix\nt – non-negative time value\np – order of the appproximation\n\nAlgorithm\n\nSee Theorem 2 in Reachability Analysis of Linear Systems with Uncertain Parameters and Inputs by M. Althoff, O. Stursberg, M. Buss.\n\n\n\n"
},

{
    "location": "lib/methods.html#Methods-1",
    "page": "Methods",
    "title": "Methods",
    "category": "section",
    "text": "This section describes systems methods implemented in IntervalMatrices.jl.Pages = [\"methods.md\"]\nDepth = 3CurrentModule = IntervalMatrices\nDocTestSetup = quote\n    using IntervalMatrices\nendleft\nright\nquadratic_expansion\nexpm_overapproximation\nexpm_underapproximation"
},

{
    "location": "about.html#",
    "page": "About",
    "title": "About",
    "category": "page",
    "text": ""
},

{
    "location": "about.html#About-1",
    "page": "About",
    "title": "About",
    "category": "section",
    "text": "This page contains some general information about this project, and recommendations about contributing.Pages = [\"about.md\"]"
},

{
    "location": "about.html#Contributing-1",
    "page": "About",
    "title": "Contributing",
    "category": "section",
    "text": "If you like this package, consider contributing! You can send bug reports (or fix them and send your code), add examples to the documentation or propose new features.Below we detail some of the guidelines that should be followed when contributing to this package."
},

{
    "location": "about.html#Branches-1",
    "page": "About",
    "title": "Branches",
    "category": "section",
    "text": "Each pull request (PR) should be pushed in a new branch with the name of the author followed by a descriptive name, e.g. t/mforets/my_feature. If the branch is associated to a previous discussion in one issue, we use the name of the issue for easier lookup, e.g. t/mforets/7."
},

{
    "location": "about.html#Unit-testing-and-continuous-integration-(CI)-1",
    "page": "About",
    "title": "Unit testing and continuous integration (CI)",
    "category": "section",
    "text": "This project is synchronized with Travis CI, such that each PR gets tested before merging (and the build is automatically triggered after each new commit).For the maintainability of this project, we try to understand and fix the failing doctests if they exist. We develop in Julia v0.6.0, but for experimentation we also build on the nightly branch.To run the unit tests locally, you should do:$ julia --color=yes test/runtests.jl"
},

{
    "location": "about.html#Contributing-to-the-documentation-1",
    "page": "About",
    "title": "Contributing to the documentation",
    "category": "section",
    "text": "This documentation is written in Markdown, and it relies on Documenter.jl to produce the HTML layout. To build the docs, run make.jl:$ julia --color=yes docs/make.jl"
},

{
    "location": "about.html#Credits-1",
    "page": "About",
    "title": "Credits",
    "category": "section",
    "text": "These persons have contributed to IntervalMatrices.jl (in alphabetic order):Marcelo Forets"
},

]}
